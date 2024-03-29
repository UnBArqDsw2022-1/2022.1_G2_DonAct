const Sequelize = require('sequelize')
const db = require('../config/db')
const Ong = require('./ONGModel')

const AcaoSocial = db.define('acaosocial', {
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

    }
})

// AcaoSocial.drop()
// Ong.drop()

// Ong.hasMany(AcaoSocial, {
//     foreignKey: {
//         allowNull: false
//     }
// })

// AcaoSocial.belongsTo(Ong)

// AcaoSocial.sync()

module.exports = AcaoSocial