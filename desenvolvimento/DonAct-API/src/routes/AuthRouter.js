const express = require("express")
const Doador = require('../models/DoadorModel')
const Ong = require("../models/ONGModel")
const router = express.Router()
require('dotenv').config()

var jwt = require('jsonwebtoken');

app.post("/", (req, res) => {
    if(req.body.user === Ong.cnpj && req.body.pwd === Ong.senha || req.body.user === Doador.cpf && req.body.pwd === Doador.senha){
      if(req.body.user === Ong.cnpj){
        const id = Ong.cnpj;
        var token = jwt.sign({id}, process.env.SECRET, {
          expiresIn: 1800
        });
        res.status(200).send({auth: true, token:token}); 
      }
      else{
        const id = Doador.cpf;
        var token = jwt.sign({id}, process.env.SECRET, {
          expiresIn: 1800
        });
        res.status(200).send({auth: true, token:token});
      }
    }
    res.status(500).send('Login inválido!');
  })
app.get('/logout', function(req, res) {
  res.status(200).send({ auth: false, token: null });
});

module.exports = router