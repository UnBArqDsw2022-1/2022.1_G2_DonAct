const express = require("express")
const router = express.Router()
const AcaoSocialController = require("../controllers/AcaoSocialController")

router.post("/cadastrar", AcaoSocialController.cadastrar)
router.get("/mostrar", AcaoSocialController.mostrar)

module.exports = router