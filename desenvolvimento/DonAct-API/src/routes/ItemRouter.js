const express = require("express")
const router = express.Router()
const ItemController = require("../controllers/ItemController")

router.post("/cadastrar", ItemController.cadastrar)
<<<<<<< Updated upstream
router.put("/:id/editar", ItemController.editar)
router.get("/mostrar", ItemController.mostrar)
router.get("/:id/mostrar", ItemController.mostrarId)
router.delete("/:id/excluir", ItemController.deletar)
=======
router.put("/editar/:id", ItemController.editar)
router.get("/mostrar", ItemController.mostrar)
router.get("/mostrar/:id", ItemController.mostrarId)
router.delete("/excluir/:id", ItemController.deletar)
>>>>>>> Stashed changes

module.exports = router
