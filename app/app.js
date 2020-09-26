const express = require('express');
const bodyParser = require('body-parser');

const App = express();

const userRoutes = require('./routes/user.routes');

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));

App.use('/api/users', userRoutes)

module.exports = App;