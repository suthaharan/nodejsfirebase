// request-promise making an API call
//http://apilayer.net/api/validate
//    ? access_key = f1455edbd8c3a15e04f413b8d3cad16e
//    & number = 14158586273
//    & country_code = 
//    & format = 1

var rp = require('request-promise');

var options = {
	uri: 'http://apilayer.net/api/validate',
	qs: {
		access_key : 'f1455edbd8c3a15e04f413b8d3cad16e',
    	number : '14158586273',
    	country_code :  '',
    	format : 1
    },
    headers : {
    	'User-Agent': 'request-promise'
    },
    json: true
};    	
  
rp(options)
    .then(function (repos) {
        console.log(repos);
        console.log('User is from %s city', repos.location)
    })
    .catch(function (err) {
        // API call failed...
        console.log(err);
    });

