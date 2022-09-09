const DataTypes = require('sequelize')
const db = require('../config/db')

const Ong = db.define('ongs', {
    cnpj: {
        type: DataTypes.BIGINT(14),
        primaryKey: true,
        allowNull: false,
        validate: {
            len: [14,14],
            is: /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
        }
    },
    fotoDePerfil: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
        }
    },
    telefone: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        unique: true,
        validate: {
            len: [11,11],
            is: /^[0-9]+$/,
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            is: /\S+@\S+\.\S+/
        },
    },    
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    },    
    cidade: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
        }
    },    
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
        }
    },    
    cep: {
        type: DataTypes.BIGINT(9),
        allowNull: false,
        validate: {
            is: /^[0-9]+$/
        }
    },    
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },    
    nomeDoResponsavel: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
        }
    },
    emailDoResponsavel: {
        type: DataTypes.STRING,
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
