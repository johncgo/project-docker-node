const express = require('express')
const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'password',
  database: 'testdb'
})

const app = express()

app.get('/', (req, res) => {
  connection.query('INSERT INTO people (name) VALUES (?)', ['User'], (err, results) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      res.send('Full Cycle Rocks!')
    }
  })
})

app.get('/people', (req, res) => {
  connection.query('SELECT * FROM people', (err, results) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      res.json(results)
    }
  })
})

app.listen(3000, () => {
  console.log('Server started on port 3000')
})
