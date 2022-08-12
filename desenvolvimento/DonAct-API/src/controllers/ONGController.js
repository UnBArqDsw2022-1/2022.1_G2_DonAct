const Ong = require("../models/ONGModel")

module.exports = {
    inicial: async (req, res) => {
      res.send("Página Inicial")
    },
    cadastrar: async (req, res) => {
      await Ong.create(req.body)
      res.send("Cadastrado com sucesso!")
    },/*
    editar: async (req, res) => {
      const jane = await User.create({ name: "Jane" });
      jane.set({
        name: "Ada",
        favoriteColor: "blue"
      });
      await jane.save();
    }*/
    deletar: async(req, res) => {
      await Ong.destroy({
        where: {"cnpj":req.params.id},
        truncate: false,
      }, res.send("Deletado com sucesso"))
    }
  }
