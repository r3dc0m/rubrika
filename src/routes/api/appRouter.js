import { Router } from "express";
import appController from "../../controllers/api/appController.js"
const routerApp = Router();
//para modelo de claves foraneas. no usar de momento!
routerApp.use("/all",appController.getTableDefinition); 

export default routerApp;