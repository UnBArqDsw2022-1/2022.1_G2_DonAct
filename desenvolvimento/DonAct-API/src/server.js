const express = require("express")
const app = express()
const configurar = require('./config/setup')
const rotas = require('./config/routes')

require('dotenv').config()
app.use(express.json())

configurar.relacionamentos()
configurar.sincronizarModel()
rotas.iniciarRotas(app)

const port = process.env.PORT || 8080

app.listen(port, function () {
  console.log("server listening on port 8080")
})

module.exports = app