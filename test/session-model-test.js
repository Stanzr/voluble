describe("model.Session", function() {
  var Session;

  beforeEach(function(done) {
    Session = require('../app/models.js').session;
    done();
  });

  afterEach(function(done) {
    var Session = require('../app/models').session;
    var session = new Session();
    session.model.collection.remove({}, done);
  });

  describe("should have interface for express session", function() {
    describe("should be a function with express session signature", function() {
      var session;

      beforeEach(function(done) {
        session = new Session();
        done();
      });

      it("#get", function(done) {
        session.should.have.property('get');
        done();
      });

      it("#set", function(done) {
        session.should.have.property('set');
        done();
      });

      it("#destroy", function(done) {
        session.should.have.property('destroy');
        done();
      });

    });

    describe("#get", function() {

      beforeEach(function(done) {
        var session = new Session();
        (new session.model({ lastAccess: new Date('1 Jan 2000 12:12'), sessionId: "IDOfSession" })).save(done);
      });


      it("should get session from a db", function(done) {
        (new Session()).get('IDOfSession', function(err, doc) {
          doc.lastAccess.should.be.eql(new Date('1 Jan 2000 12:12'));
          done();
        });
      });

    });

    describe("#set", function() {
      var session;

      beforeEach(function(done) {
        session = new Session();
        done();
      });

      it("should insert session data to database", function(done) {
        session.set('IDOfSession', { lastAccess: new Date('1 Jan 2000 12:12'), cookie: {} }, function() {
          session.model.findOne({ sessionId: "IDOfSession" }, function(err, doc) {
            doc.lastAccess.should.be.eql(new Date('1 Jan 2000 12:12'));
            done();
          });
        });

      });

    });

    describe("#destroy", function() {
      it("shouldn't be delete any session and throw error", function(done) {
        (new Session()).destroy("unexistedSessionID", function(err) {
          err.should.be['instanceof'](Error);
          done();
        });
      });

    });

  });

});