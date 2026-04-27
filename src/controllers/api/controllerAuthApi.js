import bcrypt from "bcrypt";
import userService from "../../services/serviceUser.js";
import { parseError } from "../../utils/functions.js";

async function login(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Es necesario introducir el email y contraseña' });
        }

        const user = await userService.getUserByEmail(email);
        if (!user) {
            return res.status(401).json({ error: "Credenciales incorrectas" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ error: "Credenciales incorrectas" });
        }

        req.session.userId = user.user_id;
        req.session.userName = user.name;
        req.session.userEmail = user.email;
        req.session.userRol = user.role;

        res.json({
            message: "Login correcto",
            user: {
                id: user.user_id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        parseError(error, res);
    }
}

async function register(req, res) {
    try {
        const { name, email, password, confirmPassword } = req.body;

        // Validaciones
        if (!name || !email || !password || !confirmPassword) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Las contraseñas no coinciden' });
        }
        if (password.length < 8) {
            return res.status(400).json({ error: 'La contraseña debe tener al menos 8 caracteres' });
        }

        const existingUser = await userService.getUserByEmail(email);
        if (existingUser) {
            return res.status(409).json({ error: 'El email ya está registrado' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userService.createUser({
            name,
            email,
            password: hashedPassword,
            role: 'alumno'
        });

        res.status(201).json({
            message: 'Usuario registrado exitosamente',
            user: {
                id: newUser.user_id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role
            }
        });

    } catch (error) {
        parseError(error, res);
    }
}

export const functions = {
    login,
    register
};

export default functions;