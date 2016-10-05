var express = require('express');
var request = require('request');
var JsonDB = require('node-json-db');
var weatherCity = "papendrecht";

	exports.check = function(res) {
		var db = new JsonDB("./cache/weatherCache", true, false);
		var syncTime = db.getData("/cacheTime") + 1200;
		var localTime = Math.floor(new Date() / 1000);
		if (localTime > syncTime) {
			request('http://api.openweathermap.org/data/2.5/weather?q=' + weatherCity + ',nl&appid=94a213a62d42440f0a091f2f4d03f6dc', function (error, response, body) {
			var weatherAPI = JSON.parse(body);	
			var db = new JsonDB("./cache/weatherCache", true, false);
			db.push("/",weatherAPI);
			db.push("/cacheTime",Math.floor(new Date() / 1000));
			}) 
			console.log(db.getData("/name"));
		} else {
			var db = new JsonDB("./cache/weatherCache", true, false);
			var data = db.getData("/");
			console.log('using local');
		}
	}