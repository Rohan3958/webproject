const express = require('express');
const app = express();
const fs = require("fs");
const port = 8081;

app.get('/listUser', function (req, res) {
   fs.readFile("json.json",'utf-8',(err,data)=>{
      console.log(data);
      res.end(data );
   });
   var user = {
      "user4" : {
         "name" : "mohit",
         "password" : "password4",
         "profession" : "teacher",
         "id": 2
      }
   }
   
   app.post('/addUser', function (req, res) {
      fs.readFile("json.json", 'utf8', function (err, data) {
         data = JSON.parse( data );
         data["user4"] = user["user4"];
         console.log( data );
         res.end( JSON.stringify(data));
      });
   })
   app.get('/:id', function (req, res) {
      fs.readFile( "json.json", 'utf8', function (err, data) {
         var users = JSON.parse( data );
         var user = users["states" + req.params.id] 
         console.log( user );
         res.end( JSON.stringify(user));
      });
   })
   app.delete("/deleteUser",function(req,res){
      fs.readFile("json.json",'utf8',function(err,data){
         data = JSON.parse(data)
         delete data["user"+2]
         console.log(data)
         res.end(JSON.stringify(data))
      })
   })

})
app.listen(port,function(err,data){
console.log(`Server istening om port ${port}`)
})