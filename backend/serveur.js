var connexion = require('./connexion.serveur');
var express = require('express');
var mysql = require('mysql');
const bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));