"use strict";
var cors = require('cors');
var express = require('express');
var notas = require('../../src/assets/data.json');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.get('/', function (req, res) {
    res.send(notas);
    console.log(notas);
});
app.post('/', function (req, res) {
    console.log(req.body);
    notas.push(req.body[0]);
});
app.delete('/', function (req, res) {
    var indice = 0;
    for (var i = 0; i < notas.length; i++) {
        if (req.body == notas[i]) {
            indice = i;
            break;
        }
    }
    notas.splice(indice, 0);
});
app.listen(port, function () {
    console.log("App listening at http://localhost:" + port);
});
