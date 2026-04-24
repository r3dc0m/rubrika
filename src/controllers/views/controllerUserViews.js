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

async function createUserForm(req, res) {
    res.render("users/create", { 
        title: "Crear usuario",
        error: null
    });
}

async function createUser(req, res) {
    try {
        const { name, email, password, role } = req.body;
        
        // Validación básica
        if (!name || !email || !password || !role) {
            return res.render("users/create", { 
                title: "Crear usuario",
                error: "Todos los campos son obligatorios" 
            });
        }
        
        await userModel.create({
            name,
            password,
            email,
            role
        });
        
        res.redirect("/users?success=Usuario creado correctamente");
        
    } catch (error) {
        console.error(error)
        res.render("users/create", { 
            title: "Crear usuario",
            error: "Error al crear usuario: " + error.message 
        });
    }
}

async function editUserForm(req, res) {
    try {
        const id = parseInt(req.params.id);
        const user = await userModel.findByPk(id);
        
        if (!user) {
            return res.status(404).render("error", { 
                title: "Error",
                message: "Usuario no encontrado" 
            });
        }
        
        res.render("users/edit", { 
            title: "Editar usuario",
            user: user,
            error: null
        });
    } catch (error) {
        res.status(500).render("error", { 
            title: "Error",
            message: "Error al cargar el formulario" 
        });
    }
}

async function updateUser(req, res) {
    try {
        const id = parseInt(req.params.id);
        const { name, email, password, role } = req.body;
        
        if (!name || !email || !role) {
            const user = await userModel.findByPk(id);
            return res.render("users/edit", { 
                title: "Editar usuario",
                user: user,
                error: "Nombre, email y rol son obligatorios" 
            });
        }
        
        const updateData = { name, email, role };
        
        // Solo actualizar password si se proporcionó uno nuevo
        if (password && password.trim() !== '') {
            updateData.password = password;
        }
        
        await userModel.update(updateData, { where: { user_id: id } });
        
        res.redirect(`/users/${id}?success=Usuario actualizado correctamente`);
        
    } catch (error) {
        const user = await userModel.findByPk(req.params.id);
        res.render("users/edit", { 
            title: "Editar usuario",
            user: user,
            error: "Error al actualizar usuario: " + error.message 
        });
    }
}

async function deleteUser(req, res) {
    try {
        const id = parseInt(req.params.id);
        
        const deleted = await userModel.destroy({ where: { user_id: id } });
        
        if (!deleted) {
            return res.status(404).render("error", { 
                title: "Error",
                message: "Usuario no encontrado" 
            });
        }
        
        res.redirect("/users?success=Usuario eliminado correctamente");
        
    } catch (error) {
        res.redirect(`/users/${req.params.id}?error=Error al eliminar usuario`);
    }
}

export const functions = {
    getAllUsersView,
    getUserByIdView,
    createUserForm,
    createUser,
    editUserForm,
    updateUser,
    deleteUser
};

export default functions;