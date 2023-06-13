const express = require('express');
const app = express();
const PORT = 3000;
const router = require('./router');
const auth = require('./middlewares/verifyToken')


const authController = require('./controllers/authController');


app.use('/auth', authRouter);









app.use(express.json());

//Pruebas al levantar el servidor en local


app.get('/probando', (req, res) => {
    return res.send('Probando 1, 2, 3... ¡EUREKA!');
});

app.listen(PORT, () => {
    console.log ("Servidor levantado en el puerto " + PORT)
}) 