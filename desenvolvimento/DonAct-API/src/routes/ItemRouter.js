const express = require("express")
const router = express.Router()
const ItemController = require("../controllers/ItemController")

router.post("/cadastrar", ItemController.cadastrar)
router.put("/editar/:id", ItemController.editar)
router.get("/mostrar", ItemController.mostrar)
router.get("/mostrar/:id", ItemController.mostrarId)
router.delete("/excluir/:id", ItemController.deletar)

module.exports = router
