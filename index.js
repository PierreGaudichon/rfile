// Generated by CoffeeScript 1.8.0
(function() {
  var Promise, fs;

  fs = require("fs");

  Promise = require("promise");

  module.exports = function(pth) {
    return new Promise(function(resolve, reject) {
      return fs.readFile(pth, "utf8", function(err, str) {
        if (err) {
          reject(err);
        }
        return resolve(str);
      });
    });
  };

}).call(this);
