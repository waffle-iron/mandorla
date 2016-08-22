'use strict';

var express = require('express');
var application = express();

var bodyparser = require('body-parser');
application.use( bodyparser.urlencoded({ extended: true }) );
application.use( bodyparser.json() );

var compression = require('compression');
application.use( compression() );

var morgan = require('morgan-debug');
application.use( morgan('express', 'dev') );

module.exports = application;
