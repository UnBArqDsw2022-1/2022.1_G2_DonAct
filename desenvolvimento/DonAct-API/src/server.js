const express = require("express")
const app = express()

const Ong = require('./models/ONGModel')
const Item = require('./models/ItemModel')
const AcaoSocial = require('./models/AcaoSocialModel')

Item.drop()
AcaoSocial.drop()
Ong.drop()

AcaoSocial.hasMany(Item, {
  foreignKey: {
    allowNull: false
  }
})

Item.belongsTo(AcaoSocial)

Ong.hasMany(AcaoSocial, {
  foreignKey: {
    allowNull: false
  }
})

AcaoSocial.belongsTo(Ong)

const ONGRouter = require('./routes/ONGRouter')
const ItemRouter = require('./routes/ItemRouter')
const AcaoSocialRouter = require('./routes/AcaoSocialRouter')
const sequelize = require("sequelize")

require('dotenv').config()

app.use(express.json())

app.use("/item", ItemRouter)
app.use("/acaosocial", AcaoSocialRouter)
app.use("/ong", ONGRouter)

const port = process.env.PORT || 8080

app.listen(port, function () {
  console.log("server listening on port 8080")
})

module.exports = app