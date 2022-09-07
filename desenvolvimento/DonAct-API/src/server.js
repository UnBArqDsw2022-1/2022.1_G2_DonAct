const express = require("express")
const app = express()
const ONGRouter = require('./routes/ONGRouter')
const ItemRouter = require('./routes/ItemRouter')
const AcaoSocial = require('./routes/AcaoSocialRouter')
require('dotenv').config()

app.use(express.json())

app.use("/item", ItemRouter)
app.use("/acaosocial", AcaoSocial)
app.use("/ong", ONGRouter)

const port = process.env.PORT || 8080

app.listen(port, function () {
  console.log("server listening on port 8080")
})

module.exports = app