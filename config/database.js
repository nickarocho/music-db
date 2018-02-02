var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies')

var db = mongoose.connection;

db.once('open', function () {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
});

db.on('error', function (err) {
    console.log(`Databse error: \n${err}`);
});