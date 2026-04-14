import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.status(501).send(`
    <h1>Raíz del router</h1>
    `)
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.send(`ID: ${id}`);
});


export default router