//a very very simple server

var express = require('express');
var app = express();
var animals = [ "turtle", "mouse", "fish", "kangaroo", "bear", "goat", "leopard", "dog"];
var holidays = [ "christmas", "4th of July", "Easter", "Halloween", "Thanksgiving", "New Years"]
var food = [ "fruit", "soda", "vegetable", "appetizer", "breakfast", "meat", "salad"]
var emotion = [ "distraught", "fear", "joy", "sadness", "anticipation", "ecstatic"]
var elements = [ "wind", "water", "fire", "earth", "love"]
var music = [ "classic", "hip-hop", "rock", "jazz", "reggae", "alternative", "EDM"]

app.use(express.static('public'));

app.get('/trigger_1', function(request,response){
  // response.json({"status":"success"});
  response.sendStatus(200);
  console.log(animals[ Math.floor(Math.random() * animals.length)]);

})

app.get('/trigger_2', function(request,response){
  // response.json({"status":"success"});
  response.sendStatus(200);
  console.log(holidays[ Math.floor(Math.random() * holidays.length)]);

})

app.get('/trigger_3', function(request,response){
  // response.json({"status":"success"});
  response.sendStatus(200);
  console.log(food[ Math.floor(Math.random() * food.length)]);

})

app.get('/trigger_4', function(request,response){
  // response.json({"status":"success"});
  response.sendStatus(200);
  console.log(emotion[ Math.floor(Math.random() * emotion.length)]);

})

app.get('/trigger_5', function(request,response){
  // response.json({"status":"success"});
  response.sendStatus(200);
  console.log(elements[ Math.floor(Math.random() * elements.length)]);

})

app.get('/trigger_6', function(request,response){
  // response.json({"status":"success"});
  response.sendStatus(200);
  console.log(music[ Math.floor(Math.random() * music.length)]);

})
// rely again on static server -->

// app.get('/', function(request,response){
//   // response.json({"status":"success"});
//   response.send(200, "waiting for your command, master");
//   console.log("standby, awaiting command");
// })

var server = app.listen(8081, function () {
  console.log("Shazam! listening on port 8081");
})
