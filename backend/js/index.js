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
app.post('/2', function (req, res) {
    console.log("holii");
    for (var i = 0; i < notas.length; i++) {
        if (req.body.Titulo == notas[i].Titulo) {
            console.log(notas[i]);
            notas.splice(i, 1);
            break;
        }
    }
});
app.listen(port, function () {
    console.log("App listening at http://localhost:" + port);
});
