const express = require('express');
const { addPerson, getPeople, start } = require('./database');

const app = express();
const port = 8080;

start();


app.use(express.json());

app.post('/people', (req, res) => {
  const { name } = req.body;
  addPerson(name);
  res.send('Person added to the database.');
});

app.get('', (req, res) => {
  getPeople((people) => {
  let html = "<h1>Full Cycle Rocks!</h1>";
  for(let i = 0; i < people.length; i++) {
  html += `<div>Id: ${people[i].id}</div> <div>Nome: ${people[i].name}</div>`;
  }
  res.send(html);
  });
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
