#!/usr/bin/env node

var orzata = require('commander');
var exec = require('child_process').exec;
var fs = require('fs');

orzata.version('0.4.6')
  .option('--init', 'Create the boilerplate')
  .parse( process.argv );

if( orzata.init ) {

  mkdir('./src');
  cp( __dirname + '/mandorla/index.js', './index.js');

  mkdir('./src/configurations');
  cp( __dirname + '/mandorla/configurations/develop.json', './src/configurations/develop.json');
  cp( __dirname + '/mandorla/configurations/production.json', './src/configurations/production.json');

  mkdir('./src/controllers');
  mkdir('./src/models');
  mkdir('./src/views');
}

function mkdir( des ) {
  if( !fs.existsSync( des ) ) {
    fs.mkdirSync( des );
    console.log( des );
  }
}

function cp( src, des ) {
  if( !fs.existsSync( des ) ) {
    fs.readFile( src, function( err, data ) {
      if( err ) throw err;
      fs.writeFile( des, data, function( err ) {
        if( err ) throw err;
        console.log( des );
      });
    });
  }
}
