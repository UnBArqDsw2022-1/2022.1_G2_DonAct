const Ong = require("../models/ONGModel")

module.exports = {
    inicial: async (req, res) => {
      res.send("Página Inicial")
    },
    cadastrar: async (req, res) => {
      const select = await Ong.findByPk(req.body.cnpj)
      if(select == null) {
        await Ong.create(req.body) 
        res.send("Cadastrado com sucesso!")
      }
      else
        res.send("Já foi cadastrado um usuário com esse cnpj!")
    },
    editar: async (req, res) => {
      const select = await Ong.findByPk(req.params.id)
      if(select != null) { 
        await Ong.update(
          {
          "cnpj": req.body.cnpj,
          "fotoDePerfil": req.body.fotoDePerfil,
          "nome": req.body.nome,
          "telefone": req.body.telefone,
          "email": req.body.email,
          "endereco": req.body.endereco,
          "cidade": req.body.cidade,
          "estado": req.body.estado,
          "cep": req.body.cep,
          "senha": req.body.senha,
          "nomeDoResponsavel": req.body.nomeDoResponsavel,
          "emailDoResponsavel": req.body.emailDoResponsavel
        },
        {
          where: {"cnpj": req.params.id},
          truncate: false,
        });
        res.send("Usuário editado com sucesso!")
      }
      else
        res.send("Usuário não encontrado!")
    },
    mostrar: async (req, res) => {
      const users = await Ong.findAll();
      res.send(users);
    },
    deletar: async(req, res) => {
      const select = await Ong.findByPk(req.params.id)
      if(select != null) {
        await Ong.destroy({
          where: {"cnpj":req.params.id},
          truncate: false,
        }, res.send("Deletado com sucesso"))
      }
      else
        res.send("Usuário não encontrado!")
    }
  }
