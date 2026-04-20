import express from "express";
import dotenv from "dotenv";
import router from "./routes/router.js";
import { checkDB, syncDB } from "./config/db.js";

//-----Montse-----------------------
import tasksRouter from "./routes/api/tasksRouter.js";
import taskCriteriaRouter from "./routes/api/taskCriteriaRouter.js";
import userProjectsRouter from "./routes/api/userProjectsRouter.js";
//----------------------------

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.get("/", (req, res) => {
    res.send("Rubrika API funcionando");
});


app.use("/api/tasks", tasksRouter);
app.use("/api/task-criteria", taskCriteriaRouter);
app.use("/api/user-projects", userProjectsRouter);

async function startServer() {
    await checkDB();

    app.listen(PORT, () => {
        console.log(`Servidor en marcha en puerto ${PORT}`);
    });
}


checkDB();
syncDB();
app.listen(PORT,()=>{
    console.log(`Servidor en marcha en puerto ${PORT}`);
})

