
// print sth  
console.log(32442)

// import library 
var http = require('http');

// return current date 

exports.myDateTime = function () {
    return Date();
};



// run a local node.js server with port 5555

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(5555);