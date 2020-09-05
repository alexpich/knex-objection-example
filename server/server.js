const express = require("express");
const app = express();

// Accept JSON data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Get the router files
const apiRoutes = require("./routes/api");

// Step 1 from test.js
const Knex = require("knex");
const knexFile = require("./knexfile");
const knex = Knex(knexFile.development);

// Step 2 from test.js
const { Model } = require("objection");

// Step 3 from test.js
Model.knex(knex);

// Include the routes to express
app.use("/api", apiRoutes);

const server = app.listen(8080, (error) => {
  if (error) {
    console.log("Error running Express");
  }
  console.log("Server is running on port: ", server.address().port);
});
