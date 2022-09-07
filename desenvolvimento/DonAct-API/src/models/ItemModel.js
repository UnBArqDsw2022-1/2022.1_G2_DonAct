const Sequelize = require('sequelize')
const db = require('../config/db')
const Ong = require('./ONGModel')
const AcaoSocial = require('./AcaoSocialModel')

const Item = db.define('itens', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: true
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    foto: {
        type: Sequelize.BLOB,
        allowNull: false

    }

})

Item.drop()
AcaoSocial.drop()

AcaoSocial.hasMany(Item, {
    foreignKey: {
        allowNull: false
    }
});

Item.belongsTo(AcaoSocial);

Item.sync()

module.exports = Item