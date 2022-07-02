const mysql=require("mysql");

const conecta=mysql.createConnection({
host:'localhost',
user:'root',
port:3306,
password:'123456',
database:'citas6'
});
conecta.connect((err)=>{
    if(err){
        conecta.log('error...' + err);
    }else{
        console.log('Conectado....');
    }
    
})
module.exports=conecta;
