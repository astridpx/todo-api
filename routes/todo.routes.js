const router = require("express").Router();
const Todo = require("../model/todo.schema");

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.json({ data: todos });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error." });
  }
});

router.post("/add", async (req, res) => {
  const { title, todo } = req.body;

  try {
    await Todo.create({ title, todo });

    return res.json({ message: "New todo is added" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error." });
  }
});

router.delete("/remove/:id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    
    return res.json({ message: "Todo remove is done." });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error." });
  }
});

router.put("/update/:id", async (req, res) => {
  const { title, todo } = req.body;

  try {
    await Todo.findByIdAndUpdate(req.params.id, {
      title,
      todo,
    });

    return res.json({ message: "Todo is successfully updated." });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error." });
  }
});

module.exports = router;
