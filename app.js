var express = require('express');
var app = express();
app.set('view engine', 'pug');

app.get('/', function (req, res) {  
    res.render('index', { title: 'Hey Hey Hey!', message: 'Yo Yo'})
});

app.listen(3000, function () {  
    console.log('Example app listening on port 3000!')
});
