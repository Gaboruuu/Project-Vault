const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware
require("dotenv").config(); // Load environment variables
const projectRoutes = require("./routes/projectRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Routes
app.use("/api/projects", projectRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
