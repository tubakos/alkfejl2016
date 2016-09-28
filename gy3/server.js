var express = require('express');
var nunjucks = require('nunjucks')
const bodyParser = require('body-parser');
var app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
})

app.use(bodyParser.urlencoded({ extended: false}));

app.use(function (req, res, next){
    console.log(req.method + ' ' + req.url);
    next();
});

// statikus fájlkiszolgálás middleware
//ld. public mappa
//localhost:3000/hello.txt
app.use(express.static('public'));

//nunjucks template használata
app.get('/hello/:name', function(req, res){
    const name = req.params.name;
    const city = req.query.city;
    res.render('hello.njk', { name, city });
});

app.get('/alma', function(req, res){
    //res.end('almák');
    res.render('alma.njk');
});

app.post('/alma', function(req, res){
    const appleCount = req.body.appleCount;
    res.render('alma.njk', { appleCount })
})

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Elindult a szerver.")
});