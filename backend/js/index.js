"use strict";
var express = require('express');
var notas = require('../../src/app/data/data.json');
var app = express();
var port = 4200;
app.get('/', function (req, res) {
    res.send(notas);
    console.log(notas);
});
app.listen(port, function () {
    console.log("App listening at http://localhost:" + port);
});
