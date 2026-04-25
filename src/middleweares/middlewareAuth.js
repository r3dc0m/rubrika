import userService from "../services/serviceUser.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'; 

// Para VISTAS WEB
function requireRole(...roles) {
    return (req, res, next) => {
        if (!req.session.user) {
            return res.redirect('/login?message=Inicia sesión primero');
        }
        
        if (roles.includes(req.session.user.role)) {
            next();
        } else {
            res.status(403).render('error', { 
                message: 'No tienes permiso para acceder a esta página',
                error: { status: 403 }
            });
        }
    };
}

// Para API (devuelve JSON)
function requireRoleApi(...roles) {
    return (req, res, next) => {
        const user = req.user || req.session.user;
        
        if (!user) {
            return res.status(401).json({ error: 'No autorizado. Inicia sesión primero.' });
        }
        
        if (roles.includes(user.role)) {
            next();
        } else {
            res.status(403).json({ error: 'Acceso denegado. No tienes permisos suficientes.' });
        }
    };
}




// function requireRoleApi(...roles) {
//     return (req, res, next) => {
//         if (roles.includes(req.session.user?.role)) {
//             next();
//         }
//         else {
//             res.status(403).redirect("/login?message=Acceso denegado");
//         }
//     }
// }
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Token no proporcionado' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = payload;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Token inválido o expirado' });
    }
};

async function checkCredentials(req, res, next) {
    const user = await userService.getUserByEmail(req.body.email);
    if (!user) {
        return res.redirect("/login?message=Credenciales incorrectas");
    }
    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordCorrect) {
        return res.redirect("/login?message=Credenciales incorrectas");
    }
    req.session.user = {
        id: user.user_id,
        name: user.name,
        email: user.email,
        role: user.role
    }
    next();
}

async function isLoggedIn(req, res, next) {
    if (req.session.user) {
        next()
    } else {
        return res.redirect("/login?message=Inicia sesión");
    }
}


const injectUserToViews = (req, res, next) => {
    // Verificamos si existe la sesión y el usuario dentro de ella
    if (req.session && req.session.user) {
        res.locals.user = req.session.user;
    } else {
        res.locals.user = null;
    }

    next();
};


export {
    checkCredentials,
    isLoggedIn,
    injectUserToViews,
    verifyToken,
    requireRoleApi,
    requireRole
};
