

const express = require('express');
const port = (process.env.port || 4500);
const app = express();

app.set('port',port);
app.listen(app.set('port'));
console.log('Hola soy servidor');

app.use('/login', require('./routes/rutas'));