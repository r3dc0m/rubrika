import express from 'express';
import { checkCredentials, isLoggedIn } from '../../middleweares/middlewareAuth.js';
import { showLoginForm, showRegisterForm, register, logout } from '../../controllers/views/controllerAuthView.js';

const router = express.Router();

router.get('/', showLoginForm);           
router.get('/register', showRegisterForm); 

// validación formularios
router.post('/register', register);        
router.post('/', checkCredentials, (req, res) => {
    // Redirigir al perfil del usuario logueado
    const userId = req.session.user.id;
    res.redirect(`/users/${userId}`);
});

router.get('/logout', logout);     

export default router;