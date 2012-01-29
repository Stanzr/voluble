var assert = require('assert');
var eventmodel = require('../app/models.js').chatList;
var async = require('async');


describe('#Event model test',function(){
  beforeEach(function(done){
    var dates = {
      'past': new Date(98,1,1),
      'future':(new Date((new Date()).setDate((new Date()).getDate()+5))),
      'current':new Date()
    };
    async.parallel([
                   function(cb){
      cb(null,null);
    },
    function(cb){
      (new eventmodel({
        'name':'testEvent1',
        'info':'testEvent info',
        'summary':'testEvent summary',
        'start_date':dates.past,
        'end_date':dates.future
      })).save(cb);
    },
    function(cb){
      (new eventmodel({
        'name':'testEvent2',
        'info':'testEvent info',
        'summary':'testEvent summary',
        'start_date':dates.past,
        'end_date':dates.past
      })).save(cb);
    }
    ],done);    

  });
  
  afterEach(function(done){
    eventmodel.collection.remove({},done);
  });

  it('should contain 2 events ',function(done){
    eventmodel.find({},function(err,docs){
      assert.equal(docs.length,2);
      assert.equal(err,null);
      done();    
    });
  });

  it('#findCurrentEvents should return only one currently active event',function(done){
    eventmodel.findCurrentEvents(function(err,events){
      assert.equal(err,null);
      assert.equal(events.length,1);
      assert.equal(events[0].name,'testEvent1');
      done();    
    });

  });

  it('#findPastEvents should return only one past event',function(done){
      eventmodel.findPastEvents(function(err,events){
        assert.equal(err,null);
        assert.equal(events.length,1);
        assert.equal(events[0].name,'testEvent2');
        done();      
      });
  });

});
