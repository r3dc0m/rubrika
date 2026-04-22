import userModel from "../../models/modelUsers.js";

async function getAllUsersView(req, res) {
    try {
        const users = await userModel.findAll();
        res.render("users/list", { 
            title: "Lista de usuarios",
            users: users 
        });
    } catch (error) {
        res.status(500).render("error", { 
            title: "Error",
            message: "Error al obtener los usuarios" 
        });
    }
}

async function getUserByIdView(req, res) {
    try {
        const id = parseInt(req.params.id);
        const user = await userModel.findByPk(id);
        
        if (!user) {
            return res.status(404).render("error", { 
                title: "Error",
                message: "Usuario no encontrado" 
            });
        }
        
        res.render("users/detail", { 
            title: "Detalle usuario",
            user: user 
        });
    } catch (error) {
        res.status(500).render("error", { 
            title: "Error",
            message: "Error al obtener el usuario" 
        });
    }
}

export const functions = {
    getAllUsersView,
    getUserByIdView
};

export default functions;