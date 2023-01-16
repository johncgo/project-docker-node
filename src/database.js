const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
});

const createTable = () => {
  const sql = `CREATE TABLE people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  )`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
}

const addPerson = (name) => {
  const sql = `INSERT INTO people (name) VALUES ('${name}')`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
}

const getPeople = (callback) => {
  const sql = `SELECT * FROM people`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    callback(result);
  });
}

module.exports = {
  createTable,
  addPerson,
  getPeople
};
