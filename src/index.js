const express = require('express');
const { addPerson, getPeople } = require('./database');

const app = express();
const port = 8080;

app.use(express.json());

app.post('/people', (req, res) => {
  const { name } = req.body;
  addPerson(name);
  res.send('Person added to the database.');
});

app.get('/people', (req, res) => {
  getPeople((people) => {
    res.send(people);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
