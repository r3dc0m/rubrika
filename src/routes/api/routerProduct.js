import { Router } from "express";
const router = Router();

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const product = products.find(p => p.id == id);
    res.json(product)
})

router.post("/", (req, res) => {

});

router.put("/:id", (req, res) => {

});

router.delete("/:id", (req, res) => {

});