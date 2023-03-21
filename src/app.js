const express = require('express');
const knexfile = require('../knexfile');
const app = express();
const port = 3001;
const knex = require('knex')(require('../knexfile.js')['development'])

app.get('/', (request, response) => 
  response.send('application running')
)

app.get('/pets', (request, response) => {
  knex('pet')
    .select('*')
    .then(pets => {
      var petNames = pets.map(pet => pet.name)
      response.json(petNames);
    })
})

app.listen(port, () => 
  console.log(`app running on port ${port}`)
)