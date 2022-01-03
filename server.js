const {Console} = require('console');
const fs = require('fs')
const http = require('http');

const port = process.env.PORT || 3000;
  const server = http.createServer((req,res)=>{
   res.setHeader('Content-Type', 'text/html');
     console.log(req.url)
     if(req.url=='/'){
         res.statusCode=200;
         res.end('<h1>This is Rohan</h1>')
     }
     else if(req.url=='/rohan'){
        res.statusCode=200;
         res.end('<h1>This is Pn Rohan</h1>')
     }
     else if(req.url=='/about'){
      res.statusCode=200;
      const data = fs.readFileSync('img.html')
       res.end(data.toString())
     }
     else{
        
        res.end('<h1>NOT FOUNd</h1>')
     }
     

 })
 
    server.listen(port,()=>{
     console.log(`server listening on ${port}`);
 });