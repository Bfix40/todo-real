const router = require("express").Router();
const todosController = require("../controllers/todos.controllers");

router.get("/", (req, res) => {
    res.json(todosController.getAlltodos());
});
router.get("/:id", (req, res) => {
    const id = Number(req.params.id);

    const data = todosController.getTodoById(id);

    if (data.id) {
        res.json(data);
    } else {
        res.status(400).json({
            message: "Try with another id",
        });
    }
});

router.post("/", (req, res) => {
    const data = req.body;

    const response = todosController.createTodo(data);

    res.status(201).json(response);
});

router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);

    todosController.deleteTodo(id);

    res.status(204).json({ message: `Todo with ${id} was delete` });
});

router.put("/:id", (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;
    const response = todosController.editTodo(id, data);
    res.status(201).json(response);
});

exports.router = router;
