"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var port = 3000;
app.get('/', function (request, response) {
    response.send('Hello world!');
});
// Código aqui
app.listen(port, function () {
    console.log("Server is running ate port ".concat(port, "!"));
});
