require('./configuracion/conexion_db')

const express = require('express');
const port = (process.env.port || 4500);

//express
const app =express();
//configuracion
app.set('port',port);
//rutas
app.use('/login', require('./routes/rutas'));
//iniciar express
app.listen(app.set('port'),(port),(error) =>{
    if(error) {
        console.log('Erro al iniciar servidor: ' + error)
    }
        else{
        console.log('servidor iniciado en el puerto; '+port)
        }
})





