const ruta = require('express').Router();
const conecta = require('../config/conexion');


//ver depas
ruta.get('/Citas', (req, res) => {
    let sql = ' select * from citas';
    conecta.query(sql, (err, rows) => {
        if (!err) res.json(rows);
        else {
            console.log('error');
        }
    })
});

// get un depa
ruta.get('/Citas/:id', (req, res) => {
    const { id } = req.params;
    let sql = `select * from citas where id_usuario= ?`;
    conecta.query(sql, [id], (err, rows) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
});
//agregar
ruta.post('/Citas', (req, res) => {
    const { id_usuario, nombre, ap_Apellidos, Gmail, Password, Direccion1, Cuidad, Estado, Codigo_postals, Numero_de_Empleado } = req.body
    let sql = `insert into citas(id_usuario, nombre, ap_Apellidos, Gmail, Password, Direccion1, Cuidad, Estado, Codigo_postals, Numero_de_Empleado) 
    values ( '${id_usuario}','${nombre}','${ap_Apellidos}','${Gmail}','${Password}','${Direccion1}','${Cuidad}',
    '${Estado}','${Codigo_postals}','${Numero_de_Empleado}')`;
    conecta.query(sql, (err, rows) => {
        if (err) throw err
        else {
            res.json({ status: ' agregado' })
        }
    })
});

//eliminar 
ruta.delete('/Citas/:id', (req, res) => {
    const { id } = req.params;
    let sql = `delete from citas where id_usuario = '${id}'`;
    conecta.query(sql, (err, rows) => {
        if (err) throw err
        else {
            res.json({ status: ' eliminado' })
        }
    })
});
// modificar
ruta.put('/Citas/:id', (req, res) => {
    const { id } = req.params;
    const {nombre, ap_Apellidos, Gmail, Password, Direccion1, Cuidad, Estado, Codigo_postals, Numero_de_Empleado } = req.body;
    let sql =`UPDATE citas SET nombre = '${nombre}', ap_Apellidos = '${ap_Apellidos} ', Gmail = '${Gmail}', 
    Password = '${Password}', Direccion1 = '${Direccion1}', Cuidad = '${Cuidad} ', Estado = '${Estado} ',
     Codigo_postals = '${Codigo_postals}', Numero_de_Empleado = '${Numero_de_Empleado}' WHERE (id_usuario = '${id}')`;
    conecta.query(sql, (err, rows) => {
        if (err) throw err
        else {
            res.json({ status: ' modificado' })
        }
    })
});


module.exports = ruta;
