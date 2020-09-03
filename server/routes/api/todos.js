const express = require("express");
const router = express.Router();

// Create endpoint of all todos
router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      user_id: 1, // Alex
      todo: "Sell camera",
      done: 0,
    },
    {
      id: 2,
      user_id: 1, // Alex
      todo: "Buy Cheetos",
      done: 0,
    },
    {
      id: 3,
      user_id: 3, // Gandalf
      todo: "Pay rent",
      done: 0,
    },
  ]);
});

// Export to api.js
module.exports = router;
