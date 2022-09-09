const express = require("express")
const cors = require('cors')
const app = express()
const ONGRouter = require('./routes/ONGRouter')
const ItemRouter = require('./routes/ItemRouter')
const DoadorRouter = require('./routes/DoadorRouter')
require('dotenv').config()

app.use(cors())
app.use(express.json())

app.use("/ong", ONGRouter)
app.use("/item", ItemRouter)
app.use("/doador", DoadorRouter)

const port = process.env.DB_PORT || 8080

app.listen(port, function () {
  console.log("server listening on port 8080")
})

module.exports = app