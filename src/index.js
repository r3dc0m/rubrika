import dotenv from 'dotenv'
import express from 'express';
import router from "./routes/router.js";

dotenv.config()
const PORT = process.env.PORT;
console.log(PORT) // "3000"
console.log(process.env.DB_HOST) // "localhost"

const app = express();
app.use(express.json());
app.use(express.urlencoded());


app.get("/",(req,res) => {
    res.send("Hello World");
})

app.listen(PORT,()=> {
    console.log("server up on port " + PORT)
})

