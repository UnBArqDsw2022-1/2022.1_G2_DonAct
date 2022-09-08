const express = require("express")
const router = express.Router()
const ONGController = require("../controllers/ONGController")
const verifyJWT = require("../middleware/auth")

router.get("/", verifyJWT.verifyJWT, ONGController.inicial)
router.post("/cadastrar", ONGController.cadastrar)
router.get("/:id/editar", verifyJWT.verifyJWT, ONGController.editar)
router.get("/mostrar", ONGController.mostrar)
router.delete("/:id/excluir", verifyJWT.verifyJWT, ONGController.deletar)
router.get("/:id/encontrar", verifyJWT.verifyJWT, ONGController.encontrar)

module.exports = router
