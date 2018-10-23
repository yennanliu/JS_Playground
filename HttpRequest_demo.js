

// ---------------------------------------------
// demo 1 
// https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/

var request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      console.log(movie.title);
    });
  } else {
    console.log('error');
  }
}

request.send();


// ---------------------------------------------
// demo 2 
// https://jsonplaceholder.typicode.com/
 



var request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
  	console.log(data) 
  	data.forEach(x => 
  	{	console.log('id : ' +  x.id); 
  		console.log('title : ' +  x.title); 
  	});

  } else {
    console.log('error');
  }
}

request.send();


// ---------------------------------------------
// demo 3 


