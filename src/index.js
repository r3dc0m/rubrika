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

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  }
}))

app.use(injectUserToViews);

app.set('view engine', 'pug');
app.set('views', './src/views');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.get("/", (req, res) => {
  if (req.session.user) {
    res.render("dashboard", { user: req.session.user });  
  } else {
    res.redirect("/login");  
  }
});

app.use("/api", apiRouter);
app.use("/", viewRouter);

async function startServer() {
  await checkDB();
  await syncDB();
  app.listen(3000, () => {
    console.log('Servidor Rubrika en marcha en puerto 3000');
  });
}

startServer();