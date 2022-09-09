const express = require("express")
const router = express.Router()
const ONGController = require("../controllers/ONGController")

router.get("/", ONGController.inicial)
router.post("/cadastrar", ONGController.cadastrar)
router.get("/editar/:id", ONGController.editar)
router.get("/mostrar", ONGController.mostrar)
router.delete("/excluir/:id", ONGController.deletar)

module.exports = router
