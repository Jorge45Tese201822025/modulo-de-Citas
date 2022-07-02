const mysqle=require("mysql");
const conecta = mysqle.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    port:3306,
    database:'citas3',
});

conecta.connect((err) => {
    if (err) {
        console.log('ha ocurrido un error: ' + err)
    } else {
        console.log('la base de datos conecto')
    }
});

    module.exports = conecta;

