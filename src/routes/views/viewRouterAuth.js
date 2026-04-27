import express from 'express';
import { checkCredentials, isLoggedIn } from '../../middleweares/middlewareAuth.js';
import { showLoginForm, showRegisterForm, register } from '../../controllers/views/controllerAuthView.js';

const router = express.Router();

router.get('/', showLoginForm);
router.get('/register', showRegisterForm);

router.post('/register', register);
router.post('/', checkCredentials, (req, res) => {
    res.redirect('/tasks');
});

router.get('/dashboard', isLoggedIn, (req, res) => {
    res.render('dashboard', { user: req.session.user });
});

export default router;