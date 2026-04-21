import express from "express";
import dotenv from "dotenv";
import apiRouter from "./routes/apiRouter.js";
import { checkDB, syncDB } from "./config/db.js";
import "./models/associations.js";

dotenv.config();
const app = express();

app.set('view engine', 'pug'); //engine PUG o EJS
app.set('views', './src/views'); //donde están los PUG

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("layout", {
    title: "Rubrika",
    apiBase: "/api"
  });
});

app.use("/api", apiRouter);

checkDB();
syncDB();
app.listen(3000, () => console.log('rubrika en puerto 3000'));