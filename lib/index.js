"use strict";

var http = require('http');
var path = require('path');

const API_PATH = '/db/data/';
const DEFAULT_HOST = 'localhost';
const DEFAULT_PORT = 7474;
const HEADERS = { 'Content-Type': 'application/json' };

class MisterAnderson {

  constructor (options) {
    this.host = options.host || DEFAULT_HOST;
    this.port = options.port || DEFAULT_PORT;
  }

  init () {
    var options = {
      host: this.host,
      port: this.port,
      path: API_PATH,
      headers: HEADERS
    };

    return new Promise((resolve, reject) => {
      http
        .get(options, (res) => {
          let body = '';

          res.on('data', (chunk) => {
            body += chunk;
          });

          res.on('end', () => {
            this.root = JSON.parse(body);
            resolve(this.root);
          });
        }).on('error', function (e) {
        reject(e)
      });
    });
  }

}

module.exports = MisterAnderson;