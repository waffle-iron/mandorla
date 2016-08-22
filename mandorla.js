'use strict';

process.env.NODE_ENV = 'development';
process.env.DEBUG = 'express mongoose';

var application = require('./src/mandorla/express');
var mongoose = require('./src/mandorla/mongoose');
var nconf = require('./src/mandorla/nconf');

mongoose.connect( nconf.get('mongoose:url') );

application.get('/', function( request, response ) {
  response.send('Hello mandorla');
});

application.listen( nconf.get('express:port'), nconf.get('express:host') );
