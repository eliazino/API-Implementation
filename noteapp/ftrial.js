var request = require("request");
var options = { method: 'GET',
  url: 'http://en.wikipedia.org/w/api.php',
  qs: 
   { action: 'query',
     prop: 'revisions',
     rvprop: 'content',
     rvsection: '0',
     titles: 'pizza' },
  headers: 
   { 'postman-token': 'dfe91692-0ad8-5e21-b1ef-32da5e9bf8bf',
     'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
