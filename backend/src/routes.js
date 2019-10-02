const express = require ('express');
const routes = express.Router ();
const SessionControler = require ('./controllers/SessionControler')

routes.post ('/users/', SessionControler.store);

module.exports = routes;