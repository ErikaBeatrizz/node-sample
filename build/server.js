"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 3000;
var bsm = 'Trabalho em equipe, atenção aos detalhes, proatividade, comunicação, persistência, responsabilidade pessoal, orientação ao futuro e mentalidade de crescimento ';
app.get('/', function (request, response) {
    response.send('Hello world!');
});
app.get('/bsms', function (request, response) {
    response.send("Lista de BSMs: ".concat(bsm));
});
app.get('/objetivos', function (request, response) {
    response.send('Meus objetivos de aprendizagem são: MySQL e Criar servidores');
});
// Código aqui
app.listen(port, function () {
    console.log("Server is running ate port ".concat(port, "!"));
});
