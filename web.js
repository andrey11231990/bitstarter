var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//var buff = new Buffer(30);
//buff.write(fs.readFileSync('index.html'));
//  response.send(buff.toString('utf-8'));
    response.send(fs.readFileSync('index.html').toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
