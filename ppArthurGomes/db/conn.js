const mysql = require('mysql2')

//Configuração e conexão com banco
const conn = mysql.createPool({
  connectionLimit: 10,
  host: '127.0.0.1',
  port: '3306', // É opcional.
  user: 'root',
  password: 'Sen@iDev77!.',
  database: 'biblioteca',
})

// É necessário exportar esse modulo
module.exports = conn