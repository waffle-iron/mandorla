'use strict';

var express = require('./orzata/express');
module.exports.express = express;

var mongoose = require('./orzata/mongoose');
module.exports.mongoose = mongoose;

var users = require('./orzata/models/users');
module.exports.users = users;

var jwt = require('jsonwebtoken');
module.exports.jwt = jwt;

module.exports.setup = function( username, password )
{
    users.count({}, function( error, count )
    {
        if( error ) throw error;
        if( !count )
        {
            var user = new users({ username: username, password: password });
            user.save( function( errors, user )
            {
                if( errors ) throw errors;
                console.log('[ orzata ] user ' + user.username + ' created' );
            });
        }
    });
}

module.exports.authenticate = function( request, response )
{
    users.findOne({ username: request.body.username }, function( errors, user )
    {
        if( errors ) throw errors;
        if( !user )
        {
            response.json({ success: false, message: 'Wrong username' });
        }
        else if( user )
        {
            if( user.password != request.body.password )
            {
                response.json({ success: false, message: 'Wrong password' });
            }
            else
            {
                var token = jwt.sign( user, 'super secret' );
                response.json({ success:  true, token: token });
            }
        }
    });
}

module.exports.auth = function( options )
{
    return function( request, response, next )
    {
        var token = request.body.token || request.query.token || request.headers['x-access-token'];
        if( !token && options == 'required' ) response.json({ success: false, message: 'no token provided' });
        if( !token && !options ) next();
        if( token )
        {
            jwt.verify( token, 'super secret', function( errors, decoded )
            {
                if( errors && options == 'required' ) response.json({ success: false, message: 'invalid token' });
                request.decoded = decoded;
                next();
            });
        }
    }
}
