var config = require( 'config' );
var Browser = require('zombie');
var assert = require('assert');
describe( "Application", function () {
  describe( "#http", function () {
    it( "should be listening by http", function (done) {
      var app = require( '../app' ).express;
      app.listen( config.server.port, function () {
        app.close();
        done();
      } );
    } );
  } );
  describe( "#socket.io", function () {
    it( "should listen to socket connection", function (done) {
      var app = require( '../app' ).io;
      var express = require('../app').express;
      express.listen( config.server.port, function () {
        done();
      } );
    } );
  } );
  describe('#running',function(){
    var browser,app;
    beforeEach(function(done){
      app = require( '../app' ).express;
      app.listen( config.server.port, function () {
        browser = new Browser();
        browser.site = 'http://localhost:8000';
          done();
      });
    });
    it('should answer to / request with 200x code',function(done){
      browser.visit('/',function(e,browser){
        assert.ok(browser.success);
        done();
      }); 
    });
    describe('#main page',function(){
      var browser;
      beforeEach(function(done){
        var tmp = new Browser();
        tmp.site = 'http://localhost:8000';
          tmp.visit('/',function(e,pagehandler){
          browser = pagehandler;
          done();
        });
      });

      it('should have correct title',function(done){
        assert.equal(browser.text('title'),'Voluble');
        done(); 
      });

      it('should have correct events on main page');
    });

  }); 
} );
