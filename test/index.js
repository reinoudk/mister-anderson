"use strict";

var http = require('http');
var path = require('path');

exports.neo4j = function (test) {

  var ma = require('../lib')({host: process.env.DOCKER_NEO4J_PORT_7474_TCP_ADDR});

  ma.connect()
    .then(function onFulfilled (res) {
      test.equals(200, res.statusCode, "We should get an ok response");
      test.done();
    },
    function onRejected (e) {
      test.ok(false, "We should not be here.");
      console.log(e);
      test.done();
    })
    .catch(function (e) {
      test.ok(false, "We should not be here.");
      console.log(e);
      test.done();
    });

};