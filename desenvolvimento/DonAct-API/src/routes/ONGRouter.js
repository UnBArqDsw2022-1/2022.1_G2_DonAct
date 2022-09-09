const express = require("express")
const router = express.Router()
const ONGController = require("../controllers/ONGController")

router.get("/", ONGController.inicial)
router.post("/cadastrar", ONGController.cadastrar)
<<<<<<< Updated upstream
router.get("/:id/editar", ONGController.editar)
router.get("/mostrar", ONGController.mostrar)
router.delete("/:id/excluir", ONGController.deletar)
=======
router.get("/editar/:id", ONGController.editar)
router.get("/mostrar", ONGController.mostrar)
router.delete("/excluir/:id", ONGController.deletar)
>>>>>>> Stashed changes

module.exports = router
