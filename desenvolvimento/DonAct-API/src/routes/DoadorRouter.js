const express = require("express")
const router = express.Router()
const DoadorController = require("../controllers/DoadorController")
//router.get("/", DoadorController.inicial)
router.post("/cadastrar", DoadorController.createDoador)
//router.delete("/:id/excluir", DoadorController.deletar)
module.exports = router


