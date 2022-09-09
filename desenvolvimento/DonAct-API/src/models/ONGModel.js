const Sequelize = require('sequelize')
const db = require('../config/db')

const Ong = db.define('ongs', {
    cnpj: {
        type: Sequelize.BIGINT(14),
        primaryKey: true,
        allowNull: false,
        validate: {
            len: [14, 14],
            is: /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
        }
    },
    fotoDePerfil: {
        type: Sequelize.BLOB,
        allowNull: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            is: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
        }
    },
    telefone: {
        type: Sequelize.BIGINT(11),
        allowNull: false,
        unique: true,
        validate: {
            len: [11, 11],
            is: /^[0-9]+$/,
        },
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            is: /\S+@\S+\.\S+/
        },
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            is: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
        }
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            is: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
        }
    },
    cep: {
        type: Sequelize.BIGINT(8),
        allowNull: false,
        validate: {
            is: /^[0-9]+$/
        }
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nomeDoResponsavel: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            is: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
        }
    },
    emailDoResponsavel: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            is: /\S+@\S+\.\S+/
        },
    }
})

Ong.sync()

module.exports = Ong
