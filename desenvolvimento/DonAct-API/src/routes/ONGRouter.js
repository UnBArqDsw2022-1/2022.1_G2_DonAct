const express = require("express")
const router = express.Router()
const ONGController = require("../controllers/ONGController")

router.get("/", ONGController.inicial)
router.post("/cadastrar", ONGController.cadastrar)
router.get("/:id/editar", ONGController.editar)
router.get("/mostrar", ONGController.mostrar)
router.delete("/:id/excluir", ONGController.deletar)

module.exports = router
