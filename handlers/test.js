/**
 * Handle command to interact with a test
 * Test define "simulated users" or number of requests running per minutes
 * Map with individual template or group
 */
var testRunner = require("lib/test-runner.js");
module.exports = function(app){
  /**
   * start a single test
   */
  app.put("/tests/:test/start",function(req,res){

  });
  /**
   * stop a single test
   */
  app.put("/tests/:test/stop",function(){

  });
  /**
   * start all tests
   */
  app.put("/tests/start",function(req,res){

  });
  /**
   * stop all tests
   */
  app.put("/tests/stop",function(){

  });
  /**
   * clean up results of a test
   */
  app["delete"]("/tests/:test/results",function(req,res){

  });
  /**
   * clean up results of all tests
   */
  app["delete"]("/tests/results",function(req,res){

  });
}