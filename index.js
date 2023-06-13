const express = require('express');
// const db = require('./db');
const routes = require("./router");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(routes)

//Pruebas al levantar el servidor en local


app.get('/probando', (req, res) => {
    return res.send('Probando 1, 2, 3... ¡EUREKA!');
});

app.listen(PORT, () => {
    console.log ("Servidor levantado en el puerto " + PORT)
}) 