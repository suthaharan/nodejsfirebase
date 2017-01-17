// request making an API call
//http://apilayer.net/api/validate
//    ? access_key = f1455edbd8c3a15e04f413b8d3cad16e
//    & number = 14158586273
//    & country_code = 
//    & format = 1

var request = require('request');

var access_key = 'f1455edbd8c3a15e04f413b8d3cad16e',
    number = '14158586273',
    country_code =  '',
    format = 1,
    url = 'http://apilayer.net/api/validate?access_key=' +access_key+'&number='+number+'&country_code=&format=1';
 
request({url: url}, function (error, response, body) {
   // Do more stuff with 'body' here 
   console.log("response "+ response);
   console.log("body "+ body);
}).catch(function (err) {
    // POST failed...

});