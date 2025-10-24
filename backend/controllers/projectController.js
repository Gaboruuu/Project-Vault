const sql = require("mssql");
require("dotenv").config();

const config = {
  user: process.env.DB_USER || "gaboruu",
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER || "localhost\\SQLEXPRESS",
  database: process.env.DB_NAME || "ProjectVault",
  options: {
    trustServerCertificate: true, // change this if you're not using self-signed SSL/TLS certificates
  },
};

async function getProjectDataById(projectId) {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().input("projectId", sql.Int, projectId)
      .query(`
        SELECT 
          p.*, 
          g.gitLink, g.image1 AS gitImage1, g.image2 AS gitImage2, g.image3 AS gitImage3,
          s.image1 AS swiperImage1, s.image2 AS swiperImage2, s.image3 AS swiperImage3, s.image4 AS swiperImage4, s.image5 AS swiperImage5,
          l1.name AS language1_name, l1.description AS language1_description, l1.version AS language1_version, l1.logo AS language1_logo, l1.state AS language1_state,
          l2.name AS language2_name, l2.description AS language2_description, l2.version AS language2_version, l2.logo AS language2_logo, l2.state AS language2_state,
          l3.name AS language3_name, l3.description AS language3_description, l3.version AS language3_version, l3.logo AS language3_logo, l3.state AS language3_state
        FROM Projects p
        LEFT JOIN Github g ON p.githubid = g.githubid
        LEFT JOIN Swiper s ON p.swiperid = s.swiperid
        LEFT JOIN Languages l ON p.languagesid = l.languagesid
        LEFT JOIN Language l1 ON l.language1 = l1.languageid
        LEFT JOIN Language l2 ON l.language2 = l2.languageid
        LEFT JOIN Language l3 ON l.language3 = l3.languageid
        WHERE p.ProjectId = @projectId
      `);
    return result.recordset[0];
  } catch (err) {
    throw new Error("Error fetching project data: " + err.message);
  }
}

async function getAllProjects() {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query(`
        SELECT * From Projects
      `);
    return result.recordset;
  } catch (err) {
    throw new Error("Error fetching projects: " + err.message);
  }
}

module.exports = {
  getProjectDataById,
  getAllProjects,
};
