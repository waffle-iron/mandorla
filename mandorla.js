'use strict';

process.env.NODE_ENV = 'development';
process.env.DEBUG = 'express mongoose';

var application = require('./node_configurations/express');
var mongoose = require('./node_configurations/mongoose');
var nconf = require('./node_configurations/nconf');

mongoose.connect( nconf.get('mongoose:url') );

application.get('/', function( request, response ) {
  response.send('Hello mandorla');
});

application.listen( nconf.get('express:port'), nconf.get('express:host') );
