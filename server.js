const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
    //   res.render('home.hbs', {
    //       title: 'Home',
    //       welcomeMessage: 'Hello dear',
    //       year: new Date().getFullYear()
    //   });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
      title: 'About',
      year: new Date().getFullYear()
  });
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
