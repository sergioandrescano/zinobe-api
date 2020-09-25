const express = require('express');
const bodyParser = require('body-parser');

const App = express();

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));

module.exports = App;