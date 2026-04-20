import { Router } from 'express';

const router = Router()

router.get('/', (req, res) => {
    res.json([{ id: 1, nombre: 'Ana' }])
})

router.post('/', (req, res) => {
    res.status(201).json({ mensaje: 'Usuario creado exitosamente' })
})

export default router;