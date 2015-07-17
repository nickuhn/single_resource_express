var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
var server = require('../server');
chai.use(chaihttp);

describe('restaurant REST server', function() {
  it('should return a list of restaurants from the server with a generic GET request', function(done) {
    chai.request('localhost:3000')
      .get('/api/restaurants')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        expect(res).to.be.json;
        done();
      });
  });
  it('should return a specific restaurant from the server', function(done) {
    chai.request('localhost:3000')
      .get('/api/restaurants/:id')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        expect(res).to.be.json;
        done();
      });
  });
  it('should have the ability to save a restaurant', function(done) {
    chai.request('localhost:3000')
      .post('/api/restaurants/:id')
      .send({msg: "testing"})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);;
        expect(res).to.be.json;
        done();
      });
  });
  it('should have the ability to update a restaurant', function(done) {
    chai.request('localhost:3000')
      .put('/api/restaurants/:id')
      .send({field: "updated"})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);;
        expect(res).to.be.json;
        done();
      });
  });
  it('should have the ability to delete a restaurant', function(done) {
    chai.request('localhost:3000')
      .del('/api/restaurants/:id')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);;
        expect(res).to.be.json;
        done();
      });
  });

});

