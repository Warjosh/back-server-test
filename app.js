//Requires
var express = require('express');
var bodyParser = require('body-parser');

//Inicializar variables
var app = express();

//body parser
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Add headers
app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'POST');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//Importar rutas
var time = require('./routes/session'); 


//Rutas
app.use('/service', time); 

//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log('Express server puerto 3002: \x1b[32m%s\x1b[0m', 'online');
});