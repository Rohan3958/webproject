const http= require('http')
const express = require('express')
const bodyParser =require('body-parser')
const app= express()
const port = 7070

app.use(bodyParser.urlencoded({
	extended:true
}));
app.get('/rohan',function(req,res){
    res.sendFile(__dirname+"/caal.html")
   });
function currentPatientHandler(req, res){

    const value = req.body.currentPatient;
    if(value.value == 'delPatient'){
       res.redirect(something);
    }
  
    else if(value.value== 'add'){
      app.post("/add",function(req,res){
        var num1 = Number(req.body.num1)
        var num2 = Number(req.body.num2)
     
        var result = num1 + num2;
        res.send("Addition is :-" + result)
     });
    }
  
    else if(value.value== 'medHistory'){
       res.redirect(something);
    }
  }

   app.listen(port,function(){
    console.log(`Server listening on port ${port}`)
})   