// -------------------- I. VARIABLES + PACKAGES --------------------

// Initialize express
var express = require('express');
var app = express();

// Initialize dotenv
var dotenv = require('dotenv');
dotenv.config();

// Intialize Twitter API
var Twitter = require('twitter');
var util = require('util');
