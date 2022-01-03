var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended : false }));

app.get('/', function (req, res) {
  res.render('index.ejs');
});


app.post('/top', function (req, res) {
  console.log(req.body.todo + " is added to top of the list.");
  res.redirect('/');
});


app.post('/bottom', function (req, res) {
  console.log(req.body.todo + " is added to bottom of the list.");
  res.redirect('/');
});

app.listen(8000);
console.log('App is listening on PORT 8000');