'use strict';

var express = require('./espresso/express');
module.exports.express = express;

var mongoose = require('./espresso/mongoose');
module.exports.mongoose = mongoose;

var users = require('./espresso/models/users');
module.exports.users = users;

var install = function( application )
{
    users.count({}, function( error, count )
    {
        if( error ) throw error;
        if( !count )
        {
            var user = new users({ username: application.username, password: application.password });
            user.save( function( errors, user )
            {
                if( errors ) throw errors;
                console.log('User creato: ' + user.username + ' ' + user.password );
            });
        }
    });
}

module.exports.install = install;
