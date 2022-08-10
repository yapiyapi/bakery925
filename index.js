var express = require('express')
, http = require('http')
, path = require('path')
, static = require('serve-static');

var app = express();

app.use('/',static(path.join(__dirname)));

http.createServer(app).listen(3001,function(){
    console.log('express webserver start ! :: 3001');
})