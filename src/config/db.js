import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
const DB_NAME = process.env.DB_NAME || "rollercoaster";
const DB_USER = process.env.DB_USER || "user";
const DB_PASSWORD = process.env.DB_PASSWORD || "1234";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = process.env.DB_PORT || 54321;

const sequelize = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    {
        host: DB_HOST,
        port: DB_PORT,
        dialect: "postgres"
    }
)

export async function checkDB() {
    try {
        await sequelize.authenticate()
        console.log('Conexión a la base de datos establecida correctamente.')
    }catch(e){
        console.error("No se ha conectado a la base de datos",e);
    }
}
export async function syncDB(){
    try {
        
        await sequelize.sync({ alter: true })
        console.log("base de datos sincronizada")
    } catch (error) {
        console.error("no se ha podido sincronizar",error);
    }
}
export default sequelize;