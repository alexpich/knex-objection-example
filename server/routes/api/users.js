const express = require("express");
const router = express.Router();
const User = require("../../models/User.js");

router.get("/", async (req, res) => {
  // Step 5 from test.js
  const users = await User.query();
  res.json(users);
});

// export to api.js
module.exports = router;
