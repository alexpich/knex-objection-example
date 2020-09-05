const express = require("express");
const router = express.Router();
const User = require("../../models/User.js");
const { NotFoundError } = require("objection");

// Get all users
router.get("/", async (req, res, next) => {
  try {
    // Step 5 from test.js
    const users = await User.query();

    // throw a not found error
    if (users.length === 0) {
      throw new NotFoundError(users);
    }
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// Create new user using a POST request
router.post("/", async (req, res, next) => {
  const { name, age } = req.body;

  try {
    const user = await User.query().insert({ name, age });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// export to api.js
module.exports = router;
