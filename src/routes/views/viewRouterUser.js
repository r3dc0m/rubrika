import { Router } from "express";
import userViewsController from "../../controllers/views/controllerUserViews.js";
import { requireRole, isLoggedIn } from "../../middleweares/middlewareAuth.js";

const viewRouterUser = Router();

viewRouterUser.get("/", requireRole('profesor'), userViewsController.getAllUsersView);

viewRouterUser.get("/create", requireRole('profesor'), userViewsController.createUserForm);
viewRouterUser.post("/create", requireRole('profesor'), userViewsController.createUser);

viewRouterUser.get("/:id/edit", isLoggedIn, async (req, res, next) => {
    const userId = parseInt(req.params.id);
    const currentUserId = req.session.user?.id;
    const userRole = req.session.user?.role;

    if (userRole === 'profesor') {
        const userToEdit = await userViewsController.getUserById(userId);
        if (userToEdit && userToEdit.role === 'alumno') {
            return next();
        }
        return res.status(403).render('error', {
            message: 'No tienes permiso para editar este usuario',
            error: { status: 403 }
        });
    }
    if (userRole === 'alumno' && userId === currentUserId) {
        return next();
    }

    res.status(403).render('error', {
        message: 'No tienes permiso para editar este usuario',
        error: { status: 403 }
    });
}, userViewsController.editUserForm);

viewRouterUser.post("/:id/edit", isLoggedIn, async (req, res, next) => {
    const userId = parseInt(req.params.id);
    const currentUserId = req.session.user?.id;
    const userRole = req.session.user?.role;

    if (userRole === 'profesor') {
        const userToEdit = await userViewsController.getUserById(userId);
        if (userToEdit && userToEdit.role === 'alumno') return next();
        return res.status(403).render('error', { message: 'No tienes permiso' });
    }
    if (userRole === 'alumno' && userId === currentUserId) return next();
    
    res.status(403).render('error', { message: 'No tienes permiso' });
}, userViewsController.updateUser);

viewRouterUser.post("/:id/delete", requireRole('profesor'), userViewsController.deleteUser);

viewRouterUser.get("/:id", isLoggedIn, async (req, res, next) => {
    const userId = parseInt(req.params.id);
    const currentUserId = req.session.user?.id;
    const userRole = req.session.user?.role;
  
    if (userRole === 'profesor') {
        return next();
    }
    
    if (userRole === 'alumno' && userId === currentUserId) {
        return next();
    }

    res.status(403).render('error', { 
        message: 'No tienes permiso para ver el perfil de este usuario',
        error: { status: 403 }
    });
}, userViewsController.getUserByIdView);

export default viewRouterUser;