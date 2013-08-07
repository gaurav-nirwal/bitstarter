//!#/usr/bin/env node

var fs = require('fs');
var rest = require('restler');
var sys = require('util');

//var resultNew = rest.get('http://safe-depths-4719.herokuapp.com/');
//console.log(resultNew);

rest.get('http://safe-depths-4719.herokuapp.com/').on('complete', function(result) {
    if(result instanceof Error) {
	sys.puts('Error: ' + result.message);}
    else {
	
          fs.writeFile('web.html',result, function(err){
	    if(err) throw err;
	    console.log('File saved');
	    });  
//	  console.log(result);
         }
    });
 


	
