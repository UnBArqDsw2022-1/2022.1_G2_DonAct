const express = require("express")
const router = express.Router()
const DoadorController = require("../controllers/DoadorController")
const Doador = require("../models/DoadorModel")
const verifyJWT = require("../middleware/auth")

router.get("/", verifyJWT, DoadorController.inicial)
router.get("/mostrar", verifyJWT, DoadorController.mostrar)
router.get("/encontrar/:id", verifyJWT, DoadorController.encontrar)
router.post("/cadastrar", DoadorController.cadastrar)
router.delete("/excluir/:id", verifyJWT, DoadorController.deletar)
router.put("/editar/:id", verifyJWT, DoadorController.editar)
module.exports = router