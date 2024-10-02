// Import the crowdfunding database module
const db = require('./crowdfunding_db')
// Import the CORS middleware to handle Cross-Origin Resource Sharing
const cors = require('cors');
// Import the Express framework
const express = require('express');
// Create an instance of an Express application
const app = express();
// Use the CORS middleware for all routes to enable CORS
app.use(cors());

// Configure APIs
app.get('/api/all', (req, res) => {
  // Execute database queries
  const sql =
    `SELECT f.*,c.* FROM FUNDRAISER f LEFT JOIN   CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID `
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// Use routes to process requests
app.get('/api/search', (req, res) => {
  // Execute database queries
  let sql =
    `SELECT f.*,c.* FROM FUNDRAISER f
LEFT JOIN   CATEGORY c
ON f.CATEGORY_ID = c.CATEGORY_ID WHERE 1 = 1 
`;
  console.log('---req.query', req.query)
  //Dynamically construct SQL queries based on request parameters
  if (req.query.ORGANIZER) {
    sql += ` AND ORGANIZER = '${req.query.ORGANIZER}' `
  }
  if (req.query.CITY) {
    sql += ` AND CITY = '${req.query.CITY}' `
  }
  if (req.query.CATEGORY_ID) {
    sql += ` AND f.CATEGORY_ID = '${req.query.CATEGORY_ID}' `
  }
  console.log('--sql---', sql)
  //Execute a database query and return results
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Use routes to process requests
app.get('/api/id', (req, res) => {
  // Execute database queries
  const sql =
    `SELECT f.*,c.* FROM FUNDRAISER f
LEFT JOIN   CATEGORY c
ON f.CATEGORY_ID = c.CATEGORY_ID WHERE FUNDRAISER_ID = ${req.query.FUNDRAISER_ID} ;
`
//Execute a database query and return results
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

//Set the server listening port
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
