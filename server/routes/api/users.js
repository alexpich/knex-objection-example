const express = require("express");
const router = express.Router();
const User = require("../../models/User.js");

// Get all users
router.get("/", async (req, res) => {
  // Step 5 from test.js
  const users = await User.query();
  res.json(users);
});

// Create new user using a POST request
router.post("/", async (req, res) => {
  const { name, age } = req.body;

  try {
    const user = await User.query().insert({ name, age });
    res.json(user);
  } catch (error) {
    res.status(400).json(error.data);
  }
});

// export to api.js
module.exports = router;
