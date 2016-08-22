var r1 = require('readline');
var querystring = require('querystring');
var request = require("request");
var int = r1.createInterface({
	input: process.stdin,
	output: process.stdout
})

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
     'cache-control': 'no-cache' } 
 };

int.question('Ok, welcome, what would you like to search in wikipedia? ', function(ans){
	if(ans.length > 1){
		options.qs.titles = encodeURIComponent(ans);
		request(options, function (error, response, body) {
	  		if (error) throw new Error(error);
	  	console.log(body);
		});
	}
	else{
		
	}
});