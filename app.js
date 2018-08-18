var express = require('express');
var app = express();
app.set('view engine', 'pug');

app.get('/', function (req, res) {  
    res.render('index')
});

app.get('/blog', function (req, res) {  
    res.render('blog')
});

app.listen(3000, function () {  
    console.log('Pug tutorial app is running at http://localhost:3000/')
});
