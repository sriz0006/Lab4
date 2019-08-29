var express = require('express');
var indexRouter = require('./routes/index.js');
var bodyParser = require('body-parser');//Using body parser allows you to access req.body from within your routes, and use that data for example to create a user in a database.
var path = require('path');
var app = express();

app.engine('html', require('ejs').renderFile);//A rendering engine enables you to use static files in your application.
app.set('view engine', 'html');// here we have to configure the Express app to handle the engine

app.use(express.static(path.join(__dirname, 'public')));//To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
//now i can load the files that are in public directory
//app.use(express.static('bower_components'));//bower components Bower can manage components that contain HTML, CSS, JavaScript, fonts or even image files.
app.use('/bootstrap', express.static(path.join(__dirname, 'bower_components/bootstrap/')));//Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites.
app.use('/jquery', express.static(path.join(__dirname, 'bower_components/jquery/')));
app.use('/css', express.static(path.join(__dirname, 'public/stylesheets/')));
app.use(bodyParser.urlencoded({ //The middleware to handle url encoded data is returned by bodyParser.urlencoded({extended: false}) . extended=false is a configuration option that tells the parser to use the classic encoding
    extended: false
}));

app.use('/', indexRouter);
app.listen("8080");
console.log("Server running at http://localhost:8080");

//: by default, res.render needs the HTML files to be in a directory called ‘views’