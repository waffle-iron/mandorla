'use strict';

var application = require('./src/configurations/express');
var mongoose = require('./src/configurations/mongoose');

mongoose.connect('mongodb://localhost/mandorla');

application.get('/', function( request, response ) {
  response.send('Hello mandorla');
});

application.listen( 3000, '0.0.0.0');
