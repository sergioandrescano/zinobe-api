const mongoose = require('mongoose');
const config = require('./config');

module.exports = {
    connection: null,
    connect: function () {
        if (this.connection) return this.connection;
        return mongoose.connect(config.DB).then(connection => {
            this.connection = connection;
            console.log('Connection success');
        }).catch(error => console.log(error))
    }
}