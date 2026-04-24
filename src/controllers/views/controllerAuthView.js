import userService from "../../services/serviceUser.js";
import bcrypt from "bcrypt";


export const showLoginForm = (req, res) => {
    const message = req.query.message || null;
    res.render('login/login_form', { message });
};


export const showRegisterForm = (req, res) => {
    res.render('login/register_form', { error: null, formData: {} });
};

export const showUserForm = (req, res) => {
    res.render('login/user_form', { error: null, formData: {} });
};


export const register = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        if (!name || !email || !password || !confirmPassword) {
            return res.status(400).render('register', {
                error: 'Todos los campos son obligatorios',
                formData: req.body
            });
        }
        if (password !== confirmPassword) {
            return res.status(400).render('register', {
                error: 'Las contraseñas no coinciden',
                formData: req.body
            });
        }
        if (password.length < 8) {
            return res.status(400).render('register', {
                error: 'La contraseña debe tener al menos 8 caracteres',
                formData: req.body
            });
        }

        const existingUser = await userService.getUserByEmail(email);
        if (existingUser) {
            return res.status(409).render('register', {
                error: 'El email ya está registrado',
                formData: req.body
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await userService.createUser({
            name,
            email,
            password: hashedPassword,
            role: 'alumno'
        });

        res.redirect('/login?message=Usuario registrado exitosamente');

    } catch (error) {
        console.error(error);
        res.status(500).render('register', {
            error: 'Error interno del servidor',
            formData: req.body
        });
    }
};


export const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al cerrar sesión');
        }
        res.redirect('/login?message=Sesión cerrada');
    });
};