import express from "express";
import dotenv from "dotenv";
import apiRouter from "./routes/apiRouter.js";
import viewRouter from "./routes/viewRouter.js";
import { injectUserToViews } from "./middleweares/middlewareAuth.js";

import { checkDB, syncDB } from "./config/db.js";
import "./models/associations.js";
import session from 'express-session';

dotenv.config();
const app = express();

// Configuración de sesión
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    }
}));

// Middleware para inyectar usuario en vistas
app.use(injectUserToViews);

// Configuración de Pug
app.set('view engine', 'pug');
app.set('views', './src/views');

// Middlewares estáticos y parsing
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// LOG de todas las peticiones (para depuración)
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

// MIDDLEWARE PARA NORMALIZAR URLs (eliminar barra final)
app.use((req, res, next) => {
    // Si la ruta no es la raíz y termina con barra
    if (req.path !== '/' && req.path.endsWith('/')) {
        // Eliminar la barra final
        const newPath = req.path.slice(0, -1);
        console.log(`🔄 Redirigiendo: ${req.path} → ${newPath}`);
        // Redirigir permanentemente (301) o temporalmente (302)
        return res.redirect(301, newPath);
    }
    next();
});

// Ruta principal
app.get("/", (req, res) => {
    res.render("layout", {
        title: "Rubrika",
        apiBase: "/api"
    });
});

// Rutas de API y vistas
app.use("/api", apiRouter);
app.use("/", viewRouter);

// Iniciar servidor
async function startServer() {
    await checkDB();
    await syncDB();
    app.listen(3000, () => {
        console.log('Servidor Rubrika en marcha en puerto 3000');
    });
}

startServer();