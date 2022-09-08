const express = require("express")
const router = express.Router()
const DoadorController = require("../controllers/DoadorController")
const verifyJWT = require("../middleware/auth")

router.get("/", verifyJWT.verifyJWT, DoadorController.inicial)
router.get("/mostrar", verifyJWT.verifyJWT, DoadorController.mostrar)
router.get("/encontrar/:id", verifyJWT.verifyJWT, DoadorController.encontrar)
router.post("/cadastrar", DoadorController.cadastrar)
router.delete("/excluir/:id", verifyJWT.verifyJWT, DoadorController.deletar)
router.put("/editar/:id", verifyJWT.verifyJWT, DoadorController.editar)
module.exports = router