const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'admin',
    password: 'Mrts@6323',
    database: 'agenda-petshop'
})

module.exports = conexao
