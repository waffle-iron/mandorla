'use strict';

var mandorla = {};
mandorla.nconf = require('./mandorla/node_configurations/nconf');
mandorla.mongoose = require('./mandorla/node_configurations/mongoose')( mandorla.nconf );
mandorla.application = require('./mandorla/node_configurations/express')( mandorla.nconf, mandorla.mongoose );

module.exports = mandorla;
