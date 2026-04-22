import tasksModel from "../../models/modelTasks.js";

async function getAllTasksView(req, res) {
    try {
        const tasks = await tasksModel.findAll();
        res.render("tasks/list", { 
            title: "Lista de tareas",
            tasks: tasks 
        });
    } catch (error) {
        res.status(500).render("error", { 
            title: "Error",
            message: "Error al obtener las tareas" 
        });
    }
}

async function getTasksByIdView(req, res) {
    try {
        const id = parseInt(req.params.id);
        const task = await tasksModel.findByPk(id);
        
        if (!task) {
            return res.status(404).render("error", { 
                title: "Error",
                message: "Tarea no encontrada" 
            });
        }
        
        res.render("tasks/detail", { 
            title: "Detalle tarea",
            task: task 
        });
    } catch (error) {
        res.status(500).render("error", { 
            title: "Error",
            message: "Error al obtener el tarea" 
        });
    }
}

export const functions = {
    getAllTasksView,
    getTasksByIdView
};

export default functions;