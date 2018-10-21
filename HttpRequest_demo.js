

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




