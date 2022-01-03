const express = require('express');
const res = require('express/lib/response');
const bodyParser = require("body-parser")
const http=require('http')
const app = express()
const port = 4041

        app.use(bodyParser.urlencoded({
    	extended:true
        }
            )
                );


        app.get('/rohan',function(req,res){
        res.sendFile(__dirname+"/caal.html")
        }
            );

        app.post("/",function(req,res){
        num1 = Number(req.body.num1)
        num2 = Number(req.body.num2)

        var result = num1 + num2;
        res.send("Addition is :-" + result)
        }
            );

        app.post("/",function(req,res){
        num1 = Number(req.body.num1)
        num2 = Number(req.body.num2)
  
        var result = num1 * num2;
        res.send("multi is :-" + result)
                }
                    );

        app.get('/about',(req,res)=>{
    res.end('I am Ceo Bitch!')
        }
            );

        app.listen(port,function(){
    console.log(`Server listening on port ${port}`)
})