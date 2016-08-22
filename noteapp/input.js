var r1 = require('readline');
var querystring = require('querystring');
var request = require("request");
var int = r1.createInterface({
	input: process.stdin,
	output: process.stdout
})

var getOptions = { 
  method: 'GET',
  url: 'https://en.wikipedia.org/w/api.php',
  qs: 
   { format: 'json',
     action: 'query',
     prop: 'extracts',
     exintro: '',
     explaintext: '',
     titles: '' },
  headers: 
   { 'postman-token': '3ba40789-049e-ff52-5948-b8bfe4e20e9f',
     'cache-control': 'no-cache' } 
 };

var postOptions = { method: 'POST',
  url: 'https://en.wikipedia.org/w/api.php',
  qs: 
   { format: 'json',
     action: 'query',
     prop: 'extracts',
     exintro: '',
     explaintext: '',
     titles: '' },
  headers: 
   { 'postman-token': 'b4b2cac9-e257-b660-3d8d-005273a7ee5d',
     'cache-control': 'no-cache' } };
function parseJson(json){
	extract = '';
	for ( key in json.query.pages ){
	 extract = json.query.pages[key].extract;
	  break;
	  }
	  return extract;
}
int.question('Ok, welcome, what would you like to search in wikipedia? ', function(ans){
	if(ans.length > 1){
		int.question('Do you want a secured search Y/N? ', function (reply){
			if(reply == "Y"){
				postOptions.qs.titles = encodeURI(ans);
				request(postOptions, function (error, response, body) {
	  				if (error) throw new Error(error);
	  				body = JSON.parse(body);
	  				console.log(`
	  					----------------------#
	  					Page Title: About ${ans}

	  					${parseJson(body)}`);
			});
			}
			else{
				getOptions.qs.titles = encodeURI(ans);
				request(getOptions, function (error, response, body) {
	  				if (error) throw new Error(error);
	  				body = JSON.parse(body);
	  				console.log(`
	  					----------------------#
	  					Page Title: About ${ans}

	  					${parseJson(body)}`);
			});
			}
			});
	}
	else{
		console.log("Input is invalid");	
	}
});
