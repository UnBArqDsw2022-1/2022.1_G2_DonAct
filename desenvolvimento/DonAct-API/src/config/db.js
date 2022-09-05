const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_DB, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
})

sequelize.authenticate().then(function () {
    console.log("Conexão com o banco de dados realizada com sucesso")
}).catch(err => {
    console.error('Unable to connect: ', err)
})

module.exports = sequelize
