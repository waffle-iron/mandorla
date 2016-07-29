'use strict';

var express = require('express');
var application = express();

var bodyparser = require('body-parser');

application.use( bodyparser.json() );
application.use( bodyparser.urlencoded({ extended: true }));

module.exports = application;
