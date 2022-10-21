var express = require("express");

var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));



app.get('/register',function(req,res){

res.sendFile(__dirname+"/register.html");

});

// app.get('/form-submit',function(req,res){

//       res.send(req.query.email);
      
//       });
      
app.post('/form-submit',function(req,res){

            res.send(req.body);
            
            });


app.listen(8000,()=>{
      console.log("listing the port at 8000")
});