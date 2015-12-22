"use strict";

var http = require('http');
var url = require('url');
var MisterAnderson = require('../lib');

exports.init = function (test) {

  var options = {
    host: process.env.NEO4J_PORT_7474_TCP_ADDR,
    port: process.env.NEO4J_PORT_7474_TCP_PORT
  };

  var ma = new MisterAnderson(options);

  ma
    .init()
    .then((root) => {
      test.equals('object', typeof root, "We should get an ok response");
      test.doesNotThrow(() => { url.parse(ma.root['transaction']) }, "Tansactional endpoint should be a parseble url");
      test.done();
    })
    .catch((error) => {
      test.ok(false, "The initialisation should not fail");
      console.log(error);
      test.done();
    });

};