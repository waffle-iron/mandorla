'use strict';

var mongoose = require('mongoose');

mongoose.connection.on('connected', function()
{
    console.log('[ mongoose ] Info: connected');
});

mongoose.connection.on('error', function( error )
{
    console.log('[ mongoose ] Error: ' + error );
});

mongoose.connection.on('disconnected', function()
{
    console.log('[ mongoose ] Info: disconnected');
});

var shutdown = function( message, callback )
{
    mongoose.connection.close( function()
    {
        console.log('[ mongoose ] Shutdown: ' + message );
        callback();
    });
}

process.once('SIGUSR2', function()
{
    shutdown('nodeamon restart', function()
    {
        process.kill( process.pid, 'SIGUSR2');
    });
});

process.once('SIGINT', function()
{
    shutdown('application termination', function()
    {
        process.exit( 0 );
    });
});

process.once('SIGTERM', function()
{
    shutdown('heroku application shutdown', function()
    {
        process.exit( 0 );
    });
});

module.exports = mongoose;
