const express = require("express");
const app = express();

// Get the router files
const apiRoutes = require("./routes/api");

// Include the routes to express
app.use("/api", apiRoutes);

const server = app.listen(8080, (error) => {
  if (error) {
    console.log("Error running Express");
  }
  console.log("Server is running on port: ", server.address().port);
});
