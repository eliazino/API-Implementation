var request = require("request");
var options = { 
  method: 'GET',
  url: 'https://en.wikipedia.org/w/api.php',
  qs: 
   { format: 'json',
     action: 'query',
     prop: 'extracts',
     exintro: '',
     explaintext: '',
     titles: 'alex ferguson' },
  headers: 
   { 'postman-token': '3ba40789-049e-ff52-5948-b8bfe4e20e9f',
     'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});
