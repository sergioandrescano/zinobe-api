const express = require('express');
const bodyParser = require('body-parser');

const App = express();

const userRoutes = require('./routes/user.routes');
const bankRoutes = require('./routes/bank.routes');

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));
App.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


App.use('/api/users', userRoutes);
App.use('/api/banks', bankRoutes);

module.exports = App;