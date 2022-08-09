const express = require("express")
const router = express.Router()
const ong = require("./Controllers/controllerONG")

router.get("/", ong.index)
router.get("/create", ong.create)
router.post("/", ong.store)
router.get("/:id/edit", ong.edit)
router.put("/:id", ong.update)
router.delete("/:id", ong.destroy)
module.exports = router
