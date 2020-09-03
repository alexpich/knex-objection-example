const express = require("express");
const router = express.Router();
const Todo = require("../../models/Todo");

router.get("/", async (req, res) => {
  const todos = await Todo.query();
  res.json(todos);
});

module.exports = router;
