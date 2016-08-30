'use strict';

process.env.NODE_ENV = 'development';
process.env.DEBUG = 'express mongoose';

var nconf = require('./node_configurations/nconf');
var mongoose = require('./node_configurations/mongoose')( nconf );
var application = require('./node_configurations/express')( nconf, mongoose );

application.get('/', function( request, response ) {
  response.send('Hello mandorla');
});

application.listen( nconf.get('express:port'), nconf.get('express:host') );
