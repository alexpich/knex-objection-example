const express = require("express");
const router = express.Router();
const Todo = require("../../models/Todo");

// router.get("/", async (req, res) => {
//   const todos = await Todo.query();
//   res.json(todos);
// });

// router.get("/", async (req, res) => {
//   const todos = await Todo.query().select("id", "todo", "done");
//   // Handle if no todos have been found
//   if (!todos.length === 0) {
//     return res.status(404).json({ message: "No todo found" });
//   }
//   res.json(todos);
// });

router.get("/", async (req, res) => {
  const todos = await Todo.query().where("todo", "Pay rent");
  // Handle if no todos have been found
  if (!todos.length === 0) {
    return res.status(404).json({ message: "No todo found" });
  }
  // If todos exist, return the todo set
  res.json(todos);
});

module.exports = router;
