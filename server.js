const database = require('./app/config/database');
const config = require('./app/config/config');
const app = require('./app/app');

database.connect();

app.listen(config.PORT, function(error){
    if(error) return console.log(error);
    console.log(`App running at port: ${config.PORT}`);
});