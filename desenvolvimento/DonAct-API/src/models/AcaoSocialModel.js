const Sequelize = require('sequelize')
const db = require('../config/db')

const AcaoSocial = db.define('doacao',{
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    local: {
        type: Sequelize.STRING,
        allowNull: false
    },
    objetivo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pessoasAjudadas: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    dataAcao: {
        type: Sequelize.DATE,
        allowNull: false

    },
    itens: {
        //type: Sequelize.ARRAY.toString


    },
    ong :{

    }

})

AcaoSocial.sync()

module.exports = AcaoSocial