var assert = require('assert');
var User = require('../app/models.js').user;
var async = require('async');

describe('#User',function(){
  beforeEach(function(done){
    async.parallel([
                   function(cb){
      cb(null,null);
    },
    function(cb){
      (new User({
        'name':'twitterUser',
        'email':'test@test.com',
        'auth':{
          'twitter':{
            'token':'twitterToken'
          },
          'facebook':{
            'accessToken':'adfadsf'
          },
          'password':{
            'login':'adsf',
            'psw':'ljfljs' //salt added in app
          }
        }
      })).save(cb);    
    }, 
    function(cb){
      (new User({
        'name':'facebookUser',
        'email':'test@test.com',
        'auth':{
          'twitter':{
            'token':'sdfoken'
          },
          'facebook':{
            'accessToken':'facebookToken'
          },
          'password':{
            'login':'tessdfdsft',
            'psw':'testsdfdsf' //salt added in app
          }
        }
      })).save(cb);    
    }, 
    function(cb){
      (new User({
        'name':'registeredUser',
        'email':'test@test.com',
        'auth':{
          'twitter':{
            'token':'twidsftterToken'
          },
          'facebook':{
            'accessToken':'facebodsfdsfdsokToken'
          },
          'password':{
            'login':'login',
            'psw':'password' //salt added in app
          }
        }
      })).save(cb);    
    }
    ],done);

  });
  afterEach(function(done){
    User.collection.remove({},done);
  });

  it('should be able to login with facebook',function(done){
    User.findByAuthProvider('facebook','facebookToken',function(err,user){
      assert.equal(err,null);
      assert.equal(user.name,'facebookUser');
      done();      
    });
  });

  it('should be able to login with twitter',function(done){
    User.findByAuthProvider('twitter','twitterToken',function(err,user){
      assert.equal(err,null);
      assert.equal(user.name,'twitterUser');
      done();      
    });
  });

  it('should be able to login with login and password',function(done){
    User.findByAuthProvider('password',{'login':'login','psw':'password'},function(err,user){
      assert.equal(err,null);
      assert.equal(user.name,'registeredUser');
      done();      
    });
  });

  it('should return error when authentication type is wrong',function(done){
    User.findByAuthProvider('nonexistent',{'login':'login','psw':'password'},function(err,user){
      assert.ok(err instanceof Error);
      assert.equal(err.message,'unknown auth type');
      done();      
    });
  });
});

