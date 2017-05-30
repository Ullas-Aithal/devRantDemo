"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var devRant = require("devrant");
var app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', function (req, res) {
    devRant
        .rant(43511)
        .then(function (rant) {
        res.send(rant);
    })
        .catch(function (err) {
        console.log('err: ', err.message);
    });
});
app.listen(3000, function () { console.log("Listening on 3000"); });
