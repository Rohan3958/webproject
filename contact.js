const express = require('express');
const res = require('express/lib/response');
const fs = require('fs');
const app = express();
const http = require('http')
const port = 7572

app.get('/Con',(req,res)=>{
    fs.readFile("ct.json",'utf8',(err,data)=>{
        console.log(data)
        res.end(data)
    })
    app.get('/:id',(req,res)=>{
        fs.readFile("ct.json",'utf8',(err,data)=>{
            var data =JSON.parse(data)
            var con = data["cn"+req.params.id]
            console.log(con)
            res.end(JSON.stringify(con))
        })
    })

})
app.listen(port,(req,res)=>{
    console.log(`${port}`)
})