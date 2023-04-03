const express = require('express');

//Creating a server called app
const app = express();

//Tell express to make Public folder available
app.use(express.static('public'));

//Tell express to use views
app.set('views', __dirname + '/views');

//Route  e.g.: (/about /constacts /something)

app.get('/home', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/photogalery', (request, response) => {
  response.sendFile(__dirname + '/views/photogalery.html');
});

app.get('/works', (request, response) => {
  response.sendFile(__dirname + '/views/works.html');
});

app.listen(3000, () => console.log('Listening on port: 3000'));
