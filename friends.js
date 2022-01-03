const http = require('http')
const express = require('express')
const fs= require('fs')
const app = express()
const port = 2525

app.get("/friends",function(req,res){
    fs.readFile("fd.json",'utf8',function(err,data){
        console.log(data);
        res.send(data);
    })
    app.get('/:id', function (req, res) {
        // First read existing users.
        fs.readFile("fd.json",'utf8',function(err,data) {
           var users = JSON.parse( data );
           var user = users["fd" + req.params.id] 
           console.log( user );
           res.end( JSON.stringify(user));
        });
    })
})
app.listen(port,function(err,data){
    console.log(`Server is listening on port ${port}`)
})