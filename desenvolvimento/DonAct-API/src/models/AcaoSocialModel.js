const Sequelize = require('sequelize')
const db = require('../config/db')
const Item = require('../models/ItemModel.js');
const Ong = require('../models/ONGModel')

const AcaoSocial = db.define('doacao', {
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
    // itens: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //     get() {
    //         return this.getDataValue('itens').split(';')
    //     },
    //     set(val) {
    //         this.setDataValue('itens', val.join(';'));
    //     },
    // },
    // ong: {
    //     type: 
    // }

})

AcaoSocial.hasMany(Item)
Item.belongsTo(AcaoSocial)

AcaoSocial.belongsTo(Ong)
Ong.hasMany(AcaoSocial)

AcaoSocial.sync()

module.exports = AcaoSocial