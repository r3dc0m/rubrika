import projectModel from "../../models/projectModel.js";

async function getAllProjects(req, res) {
    const projects = await projectModel.findAll();
    res.json(projects);
}

async function getProjectById(req, res) {
    const id = parseInt(req.params.id);
    const project = await projectModel.findByPk(id);
    res.json(project);
}

async function createProject(req, res) {
    const newProject = await projectModel.create(req.body);
    res.json(newProject);
}

async function updateProject(req, res) {
    const id = parseInt(req.params.id);
    await projectModel.update(req.body, { where: { project_id: id } });
    const project = await projectModel.findByPk(id);
    res.json(project);
}

async function deleteProject(req, res) {
    const id = parseInt(req.params.id);
    await projectModel.destroy({ where: { project_id: id } });
    res.json({ message: "Proyecto eliminado correctamente" });
}

export const functions = {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
}

export default functions;