'use strict';

process.env.NODE_ENV = 'development';
process.env.DEBUG = 'express mongoose';

var mandorla = require('mandorla');

var nconf = mandorla.nconf;
var mongoose = mandorla.mongoose;
var application = mandorla.application;

application.get('/', function( request, response ) {
  response.send('Hello mandorla');
});

application.listen( nconf.get('express:port'), nconf.get('express:host') );
