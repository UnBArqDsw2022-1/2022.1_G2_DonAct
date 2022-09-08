const Sequelize = require('sequelize')
const db = require('../config/db')
const Doador = db.define('doador', {
    fotoDePerfil: {
        type: Sequelize.BLOB,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        isAlphanumeric: {
            msg: "Insira um nome válido sem caracteres especiais."
        }
    },
    telefone: {
        type: Sequelize.STRING,
        is: {
            args: ["^[0-9]+", 'i'],
            msg: "Número de telefone inválido."
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
            msg: "O email inserido já foi cadastrado."
        },
        validate: {
            isEmail: {
                msg: "O endereço de email é inválido.",
            }
        }
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
        type: Sequelize.BIGINT(11),
        allowNull: false,
        primaryKey: {
            msg: "O CPF inserido já foi cadastrado."
        },
        unique: {
            msg: "O CPF inserido já foi cadastrado."
        },
        validate: {
            len: [11, 11],
            is: /([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
        }
    },
    dataNascimento: {
        type: Sequelize.STRING,
        allowNull: false,
        isDate: {
            msg: "Data de nascimento inválida."
        }
    }
})


Doador.sync()

module.exports = Doador

