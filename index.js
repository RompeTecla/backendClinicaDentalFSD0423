const express = require('express');
const db = require('./db');
const routes = require("./router");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(routes)


//Endpoint de prueba
app.get('/probando', (req, res) => {
    return res.send('Probando 1, 2, 3... ¡EUREKA!');
});

//Pruebas al levantar el servidor en local
db.then(() =>
    {
        app.listen(PORT, () => {
            console.log('Server is running on port: ' + PORT);
        })
    }
).catch((error) => {
    console.error('Error starting server', error.message);
})
