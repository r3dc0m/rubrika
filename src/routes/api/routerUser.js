import { Router } from "express";
import userController from "../../controllers/api/userController.js"
const routerUser = Router();

<<<<<<< Updated upstream
routerUser.get("/",userController.getAllUsers);
=======
routerUser.get("/users",userController.getAllUsers);

export default routerUser;


>>>>>>> Stashed changes
/*
routerUser.get("/:id",userController.getRideById)

routerUser.post("/",checkRideBody,userController.createRide)

routerUser.put("/:id",userController.updateRide);

routerUser.patch("/:id/status",userController.setStatus);

routerUser.delete("/:id",userController.deleteRide);
<<<<<<< Updated upstream
*/
export default routerUser;
=======
*/
>>>>>>> Stashed changes
