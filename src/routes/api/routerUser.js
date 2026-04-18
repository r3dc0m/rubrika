import { Router } from "express";
import userController from "../../controllers/api/userController.js"
const routerUser = Router();

routerUser.get("/users",userController.getAllUsers);

export default routerUser;

/*
routerUser.get("/:id",userController.getRideById)

routerUser.post("/",checkRideBody,userController.createRide)

routerUser.put("/:id",userController.updateRide);

routerUser.patch("/:id/status",userController.setStatus);

routerUser.delete("/:id",userController.deleteRide);

