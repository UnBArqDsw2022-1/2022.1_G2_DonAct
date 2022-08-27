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
      const select = await Ong.findByPk(req.body.cnpj)
      if (cnpjValido.status == "ERROR") {
        res.send("O CNPJ inserido não está na Receita Federal!")
      }
      else if (select == null) {
        await Ong.create(req.body)
        res.send(`Cadastrado com sucesso! ONG: ${cnpjValido.nome}`)
      }
      else
        res.send("Já foi cadastrado um usuário com esse CNPJ!")
    }
    catch (e) {
      res.send("Erro na validação do CNPJ!");
    }

  },
  editar: async (req, res) => {
    const select = await Ong.findByPk(req.params.id)
    if (select != null) {
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
          where: { "cnpj": req.params.id },
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
  deletar: async (req, res) => {
    const select = await Ong.findByPk(req.params.id)
    if (select != null) {
      await Ong.destroy({
        where: { "cnpj": req.params.id },
        truncate: false,
      }, res.send("Deletado com sucesso"))
    }
    else
      res.send("Usuário não encontrado!")
  }
}
