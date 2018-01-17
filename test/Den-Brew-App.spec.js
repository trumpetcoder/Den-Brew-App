// Test Directory
var expect = require('../server'),
	expect = require('chai');





// it('should respond with status 200 - Success', function (done) {
//        expect(actual_response.statusCode).to.equal(200);
//        done();
//      });

describe('server', function () {
  before(function () {
    server.listen(3000);
  });

  after(function () {
    server.close();
  });
});
