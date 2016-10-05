var express = require('express');
var request = require('request');
var timestamp = require('console-timestamp');

// Make this code exportable
var localVersion = "0.01";

	//Check for latest version
	exports.updateCheck = function(res) {
		request('https://raw.githubusercontent.com/azulamaris/Project-Morphious/master/version.json', function (error, response, body) {
 			var version = JSON.parse(body);
  			if (version.minimum_version == localVersion) {
  				res.send("Latest version!");
			} else if (version.minimum_version > localVersion) {
				res.send("Update available!");
			}
		})
	}