const axios = require('axios').default;
const Ong = require("../models/ONGModel")

module.exports = {
  inicial: async (req, res) => {
    res.send("Página Inicial")
  },
  cadastrar: async (req, res) => { 
    try {
      const receitaFederal = await axios.get(`https://receitaws.com.br/v1/cnpj/${req.body.cnpj}`);
      const cnpjValido = {
        "status": receitaFederal.data.status,
        "nome": receitaFederal.data.nome,
        "capital_social": Number(receitaFederal.data.capital_social)
      }
      if (cnpjValido.status == "ERROR") {
        res.send("O CNPJ inserido não está na Receita Federal!")
      }
      else if (cnpjValido.capital_social != 0)
        res.send("A instituição possui fins lucrativos!")
      else (select == null) {
        await Ong.create(req.body)
        .then(function() {
          res.send("Ong cadastrada com sucesso!")
        })
        .catch(function(err) {
          res.send(err)
        })
      }
    }
    catch (e) {
      res.send("Erro na validação do CNPJ!");
    }
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
