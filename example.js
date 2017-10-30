
//----------------------------
// print sth  

//console.log(32442)

//----------------------------
// import library 

var http = require('http');

//----------------------------
// return current date 

exports.myDateTime = function () {
    return Date();
};


//----------------------------
// run a local node.js server with port 5555

/*
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(5555);
*/

//----------------------------
// URL Module

var url = require('url');
var adr = 'http://localhost:5555/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'

//----------------------------
// read file 

var fs = require('fs');
var rs = fs.createReadStream('df_test.csv');
rs.on('open', function () {
  console.log('The file is open');
});


//----------------------------
// event 

var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');

//----------------------------
// send email 




//----------------------------
// read json 


var fs = require("fs");
console.log("\n *STARTING* \n");
// Get content from file
var contents = fs.readFileSync("test.json");
// Define to JSON type
var jsonContent = JSON.parse(contents);
// Get Value from JSON
console.log("User Name:", jsonContent.username);
console.log("Email:", jsonContent.email);
console.log("Password:", jsonContent.password);
console.log("uid:", jsonContent.uid);
console.log("\n *EXIT* \n");


// read built-in global JSON  

var exjson = {'key':'...abc...', 'key2':'...xyz...'};
for(var exKey in exjson) {
    console.log("key:"+exKey+", value:"+exjson[exKey]);
}




















