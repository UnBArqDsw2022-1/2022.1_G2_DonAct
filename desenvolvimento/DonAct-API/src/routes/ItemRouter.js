const express = require("express")
const router = express.Router()
const ItemController = require("../controllers/ItemController")

router.post("/cadastrar", ItemController.cadastrar)
router.put("/:id/editar", ItemController.editar)
router.get("/mostrar", ItemController.mostrar)
router.get("/:id/mostrar", ItemController.mostrarId)
router.delete("/:id/excluir", ItemController.deletar)

module.exports = router
