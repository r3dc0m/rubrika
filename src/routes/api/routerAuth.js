import express from 'express';
import authController from '../../controllers/api/controllerAuthApi.js';
const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/me', (req, res) => {
    if (req.session.userId) {
        res.json({ 
            loggedIn: true, 
            user: {
                id: req.session.userId,
                name: req.session.userName,
                email: req.session.userEmail,
                role: req.session.userRol
            }
        });
    } else {
        res.json({ loggedIn: false });
    }
});



export default router;