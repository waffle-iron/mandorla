'use strict';

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('user', schema );
