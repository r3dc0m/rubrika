import { Router } from "express";
import userViewsController from "../../controllers/views/controllerUserViews.js";

const viewRouterUser = Router();

viewRouterUser.get("/", userViewsController.getAllUsersView);
viewRouterUser.get("/create", userViewsController.createUserForm);
viewRouterUser.post("/create", userViewsController.createUser);
viewRouterUser.get("/:id/edit", userViewsController.editUserForm);
viewRouterUser.post("/:id/edit", userViewsController.updateUser);
viewRouterUser.post("/:id/delete", userViewsController.deleteUser);
viewRouterUser.get("/:id", userViewsController.getUserByIdView);

export default viewRouterUser;