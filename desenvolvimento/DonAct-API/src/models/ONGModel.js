const Sequelize = require('sequelize')
const db = require('../config/db')

const Ong = db.define('ongs', {
    cnpj: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    fotoDePerfil: {
        type: Sequelize.BLOB,
        allowNull: true
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
    cep: {
        type: Sequelize.STRING,
        allowNull: false
    },    
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },    
    nomeDoResponsavel: {
        type: Sequelize.STRING,
        allowNull: false
    },    
    emailDoResponsavel: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Ong.sync()

module.exports = Ong
