import { Router } from "express";
import userViewsController from "../../controllers/views/controllerUserViews.js";

const viewRouterUser = Router();

viewRouterUser.get("/", userViewsController.getAllUsersView);
viewRouterUser.get("/:id", userViewsController.getUserByIdView);

export default viewRouterUser;