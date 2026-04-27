import { Router } from "express";
import userController from "../../controllers/api/controllerUser.js"
const routerUser = Router();

routerUser.get("/users",userController.getAllUsers);

export default routerUser;