const express = require("express")
const Doador = require('../models/DoadorModel')
const Ong = require("../models/ONGModel")
const ONGController = require("../controllers/ONGController")
const router = express.Router()
require('dotenv').config()

var jwt = require('jsonwebtoken');

router.use("/", (req, res) => {
  if (String(req.body.user).length === 11) {

  }
  else if (String(req.body.user).length === 14) {
    const ong = ONGController.mostrar()
    console.log(ong)
  }
  else {

  }
  if (req.body.user === Ong.cnpj && req.body.pwd === Ong.senha || req.body.user === Doador.cpf && req.body.pwd === Doador.senha) {
    console.log('entrei!!!!!!!!!!!1')
    if (req.body.user === Ong.cnpj) {
      const id = Ong.cnpj;
      var token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 1800
      });
      res.status(200).send({ auth: true, token: token });
    }
    else {
      const id = Doador.cpf;
      var token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 1800
      });
      res.status(200).send({ auth: true, token: token });
    }
  }
  else {
    res.status(500).send('Login inválido!');
  }
})

router.get("/logout", (req, res) => {
  res.status(200).send({ auth: false, token: null });
})

module.exports = router