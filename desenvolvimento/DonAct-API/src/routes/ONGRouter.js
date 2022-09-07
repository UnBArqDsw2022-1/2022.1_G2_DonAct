const express = require("express")
const router = express.Router()
const ONGController = require("../controllers/ONGController")
const verifyJWT = require("../middleware/auth")

router.get("/", verifyJWT, ONGController.inicial)
router.post("/cadastrar", ONGController.cadastrar)
router.get("/:id/editar", verifyJWT, ONGController.editar)
router.get("/mostrar", verifyJWT, ONGController.mostrar)
router.delete("/:id/excluir", verifyJWT, ONGController.deletar)

module.exports = router
