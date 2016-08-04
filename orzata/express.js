'use strict';

var express = require('express');
var application = express();

var bodyparser = require('body-parser');
application.use( bodyparser.urlencoded({ extended: true }));
application.use( bodyparser.json() );

module.exports = application;
