"use strict";

var http = require('http');
var path = require('path');

const API_PATH = '/db/data/';
const HEADERS = { 'Content-Type': 'application/json' };

class MisterAnderson {

  constructor(options) {
    this.host = options.host || 'localhost';
    this.port = options.port || 7474;
  }

  connect () {
    var options = {
      host: this.host,
      port: this.port,
      path: API_PATH,
      headers: HEADERS
    };

    return new Promise(function (resolve, reject) {
      http.get(options, function (res) {
        resolve(res);
      }).on('error', function (e) {
        reject(e)
      });
    });
  }

}

module.exports = function (options) {
  return new MisterAnderson(options);
};