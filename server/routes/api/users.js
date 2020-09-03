const express = require("express");
const router = express.Router();

// Create endpoint of all users
router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Alex",
      age: 27,
    },
    {
      id: 2,
      name: "Frodo",
      age: 42,
    },
    {
      id: 3,
      name: "Gandalf",
      age: 85,
    },
  ]);
});

// export to api.js
module.exports = router;
