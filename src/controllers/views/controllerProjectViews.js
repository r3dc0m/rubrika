import projectModel from "../../models/modelProjects.js";

async function getAllProjectsView(req, res) {
    try {
        const projects = await projectModel.findAll();
        res.render("projects/list", { 
            title: "Lista de proyectos",
            projects: projects 
        });
    } catch (error) {
        res.status(500).render("error", { 
            title: "Error",
            message: "Error al obtener los proyectos" 
        });
    }
}

async function getProjectByIdView(req, res) {
    try {
        const id = parseInt(req.params.id);
        const project = await projectModel.findByPk(id);
        
        if (!project) {
            return res.status(404).render("error", { 
                title: "Error",
                message: "Proyecto no encontrado" 
            });
        }
        
        res.render("projects/detail", { 
            title: "Detalle proyecto",
            project: project 
        });
    } catch (error) {
        res.status(500).render("error", { 
            title: "Error",
            message: "Error al obtener el proyecto" 
        });
    }
}

export const functions = {
    getAllProjectsView,
    getProjectByIdView
};

export default functions;