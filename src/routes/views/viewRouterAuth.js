import express from 'express';
import { checkCredentials, isLoggedIn } from '../../middleweares/middlewareAuth.js';
import { showLoginForm, showRegisterForm, register, logout } from '../../controllers/views/controllerAuthView.js';

const router = express.Router();

// vistas
router.get('/', showLoginForm);
router.get('/register', showRegisterForm);

// validación formularios
router.post('/register', register);
router.post('/', checkCredentials, (req, res) => {

//    res.redirect('/');
});


router.get('/logout', logout);

router.get('/dashboard', isLoggedIn, (req, res) => {
    res.render('dashboard', { user: req.session.user });
});

export default router;