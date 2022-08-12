const express = require('express')
, static = require('serve-static');

const bodyParser = require('body-parser');
var app = express();

app.use('/',static((__dirname)));
app.use(bodyParser.json());                         //body-parser
app.use(bodyParser.urlencoded({extended:true})); 


app.get('/bakery925',(req,res)=>{
    res.send(req.body);
})
app.post('/bakery925',(req,res)=>{
    console.log(req.body);
})

app.listen(3001,function(){
    console.log('express webserver start ! :: 3001');
})

module.exports= app;