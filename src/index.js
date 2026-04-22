import express from "express";
import dotenv from "dotenv";
import apiRouter from "./routes/apiRouter.js";
<<<<<<< HEAD
=======
import viewRouter from "./routes/viewRouter.js";
>>>>>>> origin/dev
import { checkDB, syncDB } from "./config/db.js";
import "./models/associations.js";

dotenv.config();
<<<<<<< HEAD

const PORT = process.env.APP_PORT;
const app = express();

app.set('view engine', 'pug'); //engine PUG o EJS
=======
const app = express();

app.set('view engine', 'pug'); //engine PUG 
>>>>>>> origin/dev
app.set('views', './src/views'); //donde están los PUG

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
<<<<<<< HEAD
  res.render('dashboard', { 
    title: 'Rubrika',
    apiBase: '/api'
=======
  res.render("layout", {
    title: "Rubrika",
    apiBase: "/api"
>>>>>>> origin/dev
  });
});

app.use("/api", apiRouter);
<<<<<<< HEAD

checkDB();
syncDB();
app.listen(3000, () => console.log('rubrika en puerto 3000'));
=======
app.use("/", viewRouter);

async function startServer() {
    await checkDB();
    await syncDB();
    app.listen(3000, () => {
        console.log('Servidor Rubrika en marcha en puerto 3000');
    });
}

startServer();
>>>>>>> origin/dev
