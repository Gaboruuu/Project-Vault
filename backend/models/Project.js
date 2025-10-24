// models/Project.js
const mongoose = require("mongoose");

// Define the schema for the Project model
const projectSchema = new mongoose.Schema({
  title: String,
  coverLogo: String,
  description: String,
  // Add more fields as needed
});

// Create the Project model from the schema
const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
