const mysql = require("mysql2");

// Create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Shahid", // your password
  database: "portfolio"
});

// Connect
db.connect((err) => {
  if (err) {
    console.error("DB Connection Failed:", err);
  } else {
    console.log("✅ MySQL Connected");
  }
});

module.exports = db;