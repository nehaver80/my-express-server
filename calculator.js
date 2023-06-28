const express = require('express');

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
  var num1 = req.body.num1;
  var num2 = req.body.num2;

  var result = num1 + num2;
  //var result = num1 * num2;

  res.send('the result  of the calculation is' + result);
});




app.listen(3000, function () {
  console.log('server is running at 3000.');
});

//app.get('/contact', function (request, response) {
//response.send('contact me at gh');
//});

//app.get('/about', function (request, response) {
//response.send('hello this amne');
//});

//app.get('/hobbies', function (request, response) {
//response.send('contact me at yj');
//});
