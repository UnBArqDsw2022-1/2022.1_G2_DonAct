const express = require("express")
const app = express()
const ONGRouter = require('./routes/ONGRouter')
const DoadorRouter = require('./routes/DoadorRouter')
require('dotenv').config()

app.use(express.json())

app.use("/ong", ONGRouter)
app.use("/doador", DoadorRouter)

const port = process.env.PORT || 8080

app.listen(port, function () {
  console.log("server listening on port 8080")
})

module.exports = app