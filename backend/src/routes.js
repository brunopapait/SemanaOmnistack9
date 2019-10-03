const express = require ('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionControler = require ('./controllers/SessionControler');
const SpotController = require ('./controllers/SpotController');

const routes = express.Router ();
const upload = multer(uploadConfig);

routes.post ('/sessions', SessionControler.store);

routes.post ('/spots', upload.single("thumbnail"), SpotController.store);

module.exports = routes;