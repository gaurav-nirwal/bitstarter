var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

var buf = new Buffer(fs.readFileSync('index.html'));

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

//console.log("the string is ", buf.toString('utf8',0));
