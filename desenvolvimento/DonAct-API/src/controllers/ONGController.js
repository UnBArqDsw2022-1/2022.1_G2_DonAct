const Ong = require("../models/ONGModel")

module.exports = {
  inicial: async (req, res) => {
    res.send("Página Inicial")
  },
  cadastrar: async (req, res) => {
    await Ong.create(req.body)
    .then(function() {
      res.send("Ong cadastrada com sucesso!")
    })
    .catch(function(err) {
      res.send(err)
    })
  },
  editar: async (req, res) => {
    await Ong.update({
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
        where: { "cnpj": req.params.id },
        truncate: false,
      })
      .then(function() {
        res.send("Usuário editado com sucesso!")
      })
      .catch(function(err) {
        res.send(err)
      })
    
  }, 
  mostrar: async (req, res) => {
    const users = await Ong.findAll();
    res.send(users);
  },
  deletar: async (req, res) => {
    await Ong.destroy({
      where: { "cnpj": req.params.id },
      truncate: false,
    })
    .then(function() {
      res.send("Deletado com sucesso")
    })
    .catch(function(err) {
      res.send(err)
    })
  }
}