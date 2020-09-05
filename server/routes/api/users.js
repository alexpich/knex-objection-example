const express = require("express");
const router = express.Router();
const User = require("../../models/User.js");

router.get("/", async (req, res) => {
  // Step 5 from test.js
  const users = await User.query();
  res.json(users);
});

// router.get("/", async (req, res) => {
//   const users = await User.query().findById(2); // returns a single user in an object, not in an array
//   res.json(users);
// });

router.post("/", async (req, res) => {
  try {
    const user = await User.query().insert({ name: "Dennis", age: 24 });
    res.json(user);
  } catch (error) {
    res.status(400).json(error.data);
  }
});

// export to api.js
module.exports = router;
