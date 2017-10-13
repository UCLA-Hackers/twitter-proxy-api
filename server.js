// -------------------- I. VARIABLES + PACKAGES --------------------
var str = [];
var tweets = [];
var textTweet;
var jsonObject;
var final;

// Initialize express
var express = require('express');
var app = express();

// Initialize dotenv

var dotenv = require('dotenv');
dotenv.config();

// Intialize Twitter API
var Twitter = require('twitter');
var util = require('util');
var T = new Twitter({
    consumer_key: process.env.TWITTER_KEY,
    consumer_secret: process.env.TWITTER_SECRET,
    access_token_key: process.env.TWITTER_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_TOKEN_SECRET
});

// var paramsTwitter = {
//     from: 'khloekardashian',
//     count: 1
// };

// Set port number
var port = process.env.PORT || 8080

// Access to local static files
app.use(express.static(__dirname + "/public"));

// Allows CORS compatibility
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Promise function
app.post('/json-tweets/:id', function(req, res) {
// app.get('/json-tweets/', function(req, res) {
    var username = {
    from: req.params.id,
    count: 1};
    console.log(req.params.id);

    //Promise Function
    T.get('/search/tweets.json', username)
    // T.get('/search/tweets.json', paramsTwitter)
        .then(function(stageOne) {
            res.json(stageOne);
        });
});
app.listen(port, function() {
    console.log("app running");
});