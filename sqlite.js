



// install sqlite3 for js 
// npm install sqlite3 

// import sqlite library 
const sqlite3 = require('sqlite3').verbose();
 
// create a db in memory 
//var db = new sqlite3.Database(':memory:');
// create a db as new file 
var db = new sqlite3.Database('test.db');


// create a new db with table name lorem
// and run query 
db.serialize(function() {
  db.run("CREATE TABLE lorem (info TEXT)");

  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();

  db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
      console.log(row.id + ": " + row.info);
  });
});

db.close();