const { Router } = require('express');
const knex = require('../db/knex');

const routes = Router();

/* GET home page. */
routes.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
routes.get('/api', (req, res) => {
  knex.raw('SELECT * from todos').then(function (todos) {
    res.send(todos.rows);
  });
});

module.exports = routes;
