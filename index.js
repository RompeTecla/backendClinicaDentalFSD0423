const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());


app.get('/probando', (req, res) => {
    return res.send('Probando 1, 2, 3... ¡EUREKA!');
});

app.listen(PORT, () => {
    console.log ("Servidor levantado en el puerto " + PORT)
}) 