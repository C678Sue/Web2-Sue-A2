const mysql = require('mysql');
// Create a database connection
const db = mysql.createConnection({
    host: 'localhost', // Database address
    user: 'root', // Database users
    password: '123456', // Database password
    database: 'crowdfunding_db' // The name of the database to connect to
  
  });
  
  // Connecting to a database
  db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('Connected to database');
  });

module.exports = db