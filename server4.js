const express = require('express');
const app = express()
const port = 8080

app.get('/rohan',(req,res)=>{
    res.end('Hello')
})
app.get('/about',(req,res)=>{
    res.end('nalla')
})

app.post('rohan2',(req,res)=>{
    res.send('Hello kamlesh')
})
app.listen(port,()=>{
    console.log(`list ${port}`)
})
