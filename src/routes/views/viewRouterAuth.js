import express from 'express';
import { checkCredentials, isLoggedIn } from '../../middleweares/middlewareAuth.js';
import { showLoginForm, showRegisterForm, register, logout } from '../../controllers/views/controllerAuthView.js';

const router = express.Router();


router.get('/login', showLoginForm);
router.get('/register', showRegisterForm);


router.post('/register', register);
router.post('/login', checkCredentials, (req, res) => {
    res.redirect('/dashboard');
});


router.get('/logout', logout);


router.get('/dashboard', isLoggedIn, (req, res) => {
    res.render('dashboard', { user: req.session.user });
});

export default router;