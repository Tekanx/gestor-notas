"use strict";
var cors = require('cors');
var express = require('express');
var notas = require('../../src/assets/data.json');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var notaguardada;
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
app.post('/borrar', function (req, res) {
    console.log("Eliminando", req.body);
    for (var i = 0; i < notas.length; i++) {
        if ((req.body.Titulo == notas[i].Titulo) && (req.body.Estado == notas[i].Estado) && (req.body.Descripcion == notas[i].Descripcion)) {
            console.log(notas[i]);
            notas.splice(i, 1);
            break;
        }
    }
});
app.post('/modificar', function (req, res) {
    console.log("Modificando", req.body);
    for (var i = 0; i < notas.length; i++) {
        if ((req.body[1].Titulo == notas[i].Titulo) && (req.body[1].Estado == notas[i].Estado) && (req.body[1].Descripcion == notas[i].Descripcion)) {
            notas[i].Titulo = req.body[0].Titulo;
            notas[i].Estado = req.body[0].Estado;
            notas[i].Descripcion = req.body[0].Descripcion;
            break;
        }
    }
});
app.post('/notavieja', function (req, res) {
    notaguardada = req.body;
    console.log("notita vieja: ", notaguardada);
});
app.get('/notavieja', function (req, res) {
    res.send(notaguardada);
});
app.listen(port, function () {
    console.log("App listening at http://localhost:" + port);
});
