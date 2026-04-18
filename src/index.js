import express from "express";
import dotenv from "dotenv";
import router from "./routes/router.js";
import { checkDB,syncDB } from "./config/db.js";

//-----Montse-----------------------
import tasksRouter from "./routes/api/tasksRouter.js";
//----------------------------

dotenv.config();
const PORT = process.env.APP_PORT;
const app = express();

app.use(express.urlencoded());
app.use(express.json());


app.use("/",router);

//-----Montse-----------------------
app.use("/api/tasks", tasksRouter);
//----------------------------

app.get("/",(req,res)=>{
    res.send("hello world");
})

checkDB();
//syncDB();
app.listen(PORT,()=>{
    console.log(`Servidor en marcha en puerto ${PORT}`);
})
