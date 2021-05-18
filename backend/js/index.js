"use strict";
var cors = require('cors');
var express = require('express');
var notas = require('../../src/assets/data.json');
var app = express();
var port = 3000;

app.use(cors());

app.get('/', function (req, res) {
    res.send(notas);
    console.log(notas);
});

app.post('/', function (req, res) {
    console.log("holiiwi");
    /*var send=[];
    send.push({Titulo:"nuevaNotita",Estado:"Abierto",Descripcion:"probanditu"});
    res.json(send);*/
    
});

app.listen(port, function () {
    console.log("App listening at http://localhost:" + port);
});
