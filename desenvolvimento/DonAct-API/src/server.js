const express = require("express")
const app = express()
const ONGRouter = require('./routes/ONGRouter')
const ItemRouter = require('./routes/ItemRouter')
const DoadorRouter = require('./routes/DoadorRouter')
const AuthRouter = require('./routes/AuthRouter')
const verifyJWT = require("../middleware/auth")

require('dotenv').config()

app.use(express.json())

app.use("/ong", ONGRouter)
app.use("/item", verifyJWT, ItemRouter)
app.use("/doador", DoadorRouter)
app.use("/login", AuthRouter)

const port = process.env.PORT || 8080

app.listen(port, function () {
  console.log("server listening on port 8080")
})

module.exports = app