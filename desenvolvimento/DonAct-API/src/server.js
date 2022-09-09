const express = require("express")
const cors = require('cors')
const app = express()
const configurar = require('./config/setup')
const rotas = require('./config/routes')

require('dotenv').config()
app.use(cors());
app.use(express.json())

configurar.relacionamentos()
configurar.sincronizarModel()
rotas.iniciarRotas(app)

const port = process.env.DB_PORT || 8080

app.listen(port, function () {
  console.log("server listening on port 8080")
})

module.exports = app