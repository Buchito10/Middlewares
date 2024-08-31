const rutas = require("express").Router();
const { fecha, mnsj } = require('./middleware'); 

rutas.get("/ruta1", fecha, (req, res) => {
    res.send("Ruta 1");
});

rutas.get("/ruta2", fecha, mnsj, (req, res) => {
    res.send("Ruta 2");
});

rutas.get("/ruta3", fecha, mnsj, (req, res) => {
    res.send("Ruta 3");
});

module.exports = rutas;