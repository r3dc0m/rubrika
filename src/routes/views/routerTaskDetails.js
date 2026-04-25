import { Router } from "express";
import viewController from "../../controllers/views/controllerViewTaskDetails.js";
import { requireRole, isLoggedIn } from "../../middleweares/middlewareAuth.js";

const routerGetTaskDetails = Router();

routerGetTaskDetails.get("/getTaskDetail/:id", isLoggedIn, async (req, res, next) => {
    const userRole = req.session.user?.role;
    const taskId = parseInt(req.params.id);
    
    if (userRole === 'profesor') {
        return next();
    }
    
    if (userRole === 'alumno') {
        try {
            const task = await viewController.getTaskById(taskId);
            if (!task) {
                return res.status(404).render("error", {
                    title: "Error",
                    message: "Tarea no encontrada"
                });
            }
            
            if (task.eval_available === true) {
                return next();
            } else {
                return res.status(403).render("error", {
                    title: "Acceso denegado",
                    message: "No tienes permiso para ver esta tarea. La evaluación no está disponible."
                });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).render("error", {
                title: "Error",
                message: "Error al verificar la tarea"
            });
        }
    }
    
    res.status(403).render("error", {
        title: "Acceso denegado",
        message: "No tienes permiso para acceder a este recurso"
    });
}, viewController.getTaskDetail);

routerGetTaskDetails.get("/getAllTasks", isLoggedIn, async (req, res, next) => {
    const userRole = req.session.user?.role;
    
    if (userRole === 'profesor') {
        return next();
    }
    
    if (userRole === 'alumno') {
        req.filterByEvalAvailable = 'Si'; 
        return next();
    }
    
    res.status(403).render("error", {
        title: "Acceso denegado",
        message: "No tienes permiso para acceder a este recurso"
    });
}, viewController.getAllTasks);

export default routerGetTaskDetails;