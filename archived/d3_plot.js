// please install d3 for node via command below first if you don't have d3 locally 
// npm install d3


// var d3 = require("/lib/d3.js");
var d3 = require("d3");

//console.log(d3)


// d3 scripts 
//----------------------------------


function draw(data) {
"use strict";
d3.select("body")
.append("ul")
.selectAll("li")
.data(data)
.enter()
.append("li")
.text(function (d) {
return d.name + ": " + d.status;
});
}


// d3 pre-process 
//----------------------------------


d3.json("<your_json_file>", function(data) {
  console.log(data);	
  console.table(data);
});







