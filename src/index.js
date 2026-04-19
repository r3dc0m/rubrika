import express from "express";
import dotenv from "dotenv";
import router from "./routes/router.js";
import { checkDB, syncDB } from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.get("/", (req, res) => {
    res.send("Rubrika API funcionando");
});

// Primero conectamos la BD, luego arrancamos el servidor
async function startServer() {
    await checkDB();
    await syncDB();
    app.listen(PORT, () => {
        console.log(`Servidor en marcha en puerto ${PORT}`);
    });
}

startServer();