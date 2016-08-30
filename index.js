'use strict';

var mandorla = {};
mandorla.nconf = require('./mandorla/nconf');
mandorla.mongoose = require('./mandorla/mongoose')( nconf );
mandorla.application = require('./mandorla/express')( nconf, mongoose );

module.exports = mandorla;
