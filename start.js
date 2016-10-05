var express = require('express');
var app = express();
var JsonDB = require('node-json-db');
var say = require('say');
var player = require('play-sound')(opts = {});

app.get('/', function (req, res) {
  res.send('temp index');
});

app.get('/check-update', function (req, res) {
  var update = require('./updateModule/updateCheck');
  update.updateCheck(res);
});

app.get('/voice', function (req,res) {
	say.speak('Elina, You are the biggest faggot on earth');
});

app.get('/lightOn', function (req, res) {
  res.send("Lights exploded!");
});

app.get('/weatherCheck', function (req, res) {
  var weather = require('./baseModule/weatherModule/weatherModule');
  weather.check();
});

app.get('/ip', function (req, res) {
  var local = require('./baseModule/locationModule/');
  local.city();
});

app.get('/getstarted', function (req, res) {
  var getstarted = require('./getstartedModule');
  getstarted.info(res);
});

app.get('/getstarted/stage/:id', function (req, res) {
  
});

app.listen(3000, function () {
  say.speak('Systems initialized');
});