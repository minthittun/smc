var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 3000;

app.use(express.static('public'))

app.get('/', function(req, res){

	res.sendFile(__dirname + '/index.html');
  
});

app.get('/contact', function(req, res){

	res.sendFile(__dirname + '/contact.html');
  
});

app.get('/terms', function(req, res){

	res.sendFile(__dirname + '/terms.html');
  
});


http.listen(port, function(){
  console.log('listening on *:' + port);
});