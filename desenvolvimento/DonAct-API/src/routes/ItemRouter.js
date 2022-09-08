const express = require("express")
const router = express.Router()
const ItemController = require("../controllers/ItemController")
const verifyJWT = require("../middleware/auth")

router.post("/cadastrar", verifyJWT.verifyJWT, ItemController.cadastrar)
router.put("/:id/editar", verifyJWT.verifyJWT, ItemController.editar)
router.get("/mostrar", verifyJWT.verifyJWT, ItemController.mostrar)
router.get("/:id/mostrar", verifyJWT.verifyJWT, ItemController.mostrarId)
router.delete("/:id/excluir", verifyJWT.verifyJWT, ItemController.deletar)

module.exports = router
