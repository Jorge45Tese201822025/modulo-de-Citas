const routes = require('express').Router();
const consulta=require('../configuracion/conexion_db');
const {route} = require("express/lib/router");

routes.get('/reg',(req,res)=>{
    res.send('ruta login');
});

routes.get('/bd',(require,res)=> {
    let sql = " select * from Datos_personales;"

    consulta.query(sql, (err, rows) => {
        if (!err) res.json(rows)
        else
            console.error(err);

    });
});


module.exports = routes;









