const express = require('express');
const app = express()
const port = 4040

app.get('/', (req, res) => {
  res.end('Hello World!');
});

app.get('/rohan',(req,res) => {
    res.send("Fuck World")
})

app.post("rohan1",(req,res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`app listening at ${port}`)
  });