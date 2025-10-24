const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.get("/:projectId", async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const projectData = await projectController.getProjectDataById(projectId);
    res.json(projectData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const projectData = await projectController.getAllProjects();
    res.json(projectData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
