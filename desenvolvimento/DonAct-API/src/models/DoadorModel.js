const Sequelize = require('sequelize')
const db = require('../config/db')
const Doador = db.define('doador', {
    fotoDePerfil: {
        type: Sequelize.BLOB,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
   
    email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
    isEmail: {
    msg: "Must be a valid email address",
    }}
    },


    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    dataNascimento: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


Doador.sync()

module.exports = Doador

