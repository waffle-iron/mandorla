#!/usr/bin/env node

var orzata = require('commander');
var fs = require('fs');

orzata.version('0.0.1')
  .option('--init', 'Create the boilerplate')
  .parse( process.argv );

if( orzata.init ) {

  var dir = './test';
  if( !fs.existsSync( dir ) ) fs.mkdirSync( dir );

  dir = './test/configurations';
  if( !fs.existsSync( dir ) ) fs.mkdirSync( dir );

  if( !fs.existsSync('./test/configurations/develop.json') ) {
    fs.readFile('./mandorla/configurations/develop.json', function( err, data ) {
      if( err ) throw err;
      fs.writeFile('./test/configurations/develop.json', data, function( err ) {
        if( err ) return console.log( err );
      });
    });
  }

  if( !fs.existsSync('./test/configurations/production.json') ) {
    fs.readFile('./mandorla/configurations/production.json', function( err, data ) {
      if( err ) throw err;
      fs.writeFile('./test/configurations/production.json', data, function( err ) {
        if( err ) return console.log( err );
      });
    });
  }

  dir = './test/controllers';
  if( !fs.existsSync( dir ) ) fs.mkdirSync( dir );

  dir = './test/models';
  if( !fs.existsSync( dir ) ) fs.mkdirSync( dir );

  dir = './test/views';
  if( !fs.existsSync( dir ) ) fs.mkdirSync( dir );

}
