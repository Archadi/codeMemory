// Imports
const express = require('express');
const bodyparser = require('body-parser');

const motsclesControllers = require('./controllers/motsclesController')

// Instantiate server
var server = express();

// Configure routes
server.use(bodyparser.urlencoded({
    extended: true
}));

server.use(bodyparser.json());

server.get('/', function(req, res){
    res.type('html'); 
    res.status(200).send('<h1>Bonjour mon server</h1>');
});

//Launch server
server.listen(8080, function(){
    console.log('Server en écoute :)');
});

//routes
server.use('/keyswords', motsclesControllers);