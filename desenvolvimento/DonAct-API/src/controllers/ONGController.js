const Ong = require("../models/ONGModel")

module.exports = {
    inicial: async (req, res) => {
      res.send("Página Inicial")
    },
    cadastrar: async (req, res) => {
      erro = false
      try {
        await Ong.create(req.body)
      }
      catch {
        erro = true
        res.send("Ocorreu um erro ao cadastrar!")
      }
      if(erro == false)
        res.send("Cadastrado com sucesso!")
    },/*
    editar: async (req, res) => {
      await User.update({ lastName: "Doe" }, {
        where: {
          lastName: null
        }
      });
    },*/
    mostrar: async (req, res) => {
      const users = await Ong.findAll();
      res.send("All users:", JSON.stringify(users, null, 2));
    },
    deletar: async(req, res) => {
      await Ong.destroy({
        where: {"cnpj":req.params.id},
        truncate: false,
      }, res.send("Deletado com sucesso"))
    }
  }
