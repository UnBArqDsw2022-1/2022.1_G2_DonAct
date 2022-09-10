const axios = require("axios").default;
const Ong = require("../models/ONGModel");
const AcaoSocial = require("../models/AcaoSocialModel");
const Item = require("../models/ItemModel");

module.exports = {
  inicial: async (req, res) => {
    res.send("Página Inicial");
  },
  cadastrar: async (req, res) => {
    let CNPJvalido = true;
    const receitaFederal = await axios.get(
      `https://receitaws.com.br/v1/cnpj/${req.body.cnpj}`
    );
    const cnpjValido = {
      status: receitaFederal.data.status,
      nome: receitaFederal.data.nome,
      capital_social: Number(receitaFederal.data.capital_social),
    };
    if (cnpjValido.status == "ERROR") {
      res.send("O CNPJ inserido não está na Receita Federal!");
      CNPJvalido = false;
    } else if (cnpjValido.capital_social != 0) {
      res.send("A instituição possui fins lucrativos!");
      CNPJvalido = false;
    }
    if (CNPJvalido == true) {
      await Ong.create(req.body)
        .then(function () {
          res.status(201).send("Ong cadastrada com sucesso!");
        })
        .catch(function (err) {
          var erro = err.errors[0].message;
          switch (erro) {
            case "PRIMARY must be unique":
              res.send("CNPJ já cadastrado!");
              break;
            case "telefone must be unique":
              res.send("Telefone já cadastrado!");
              break;
            case "email must be unique":
              res.send("Email já cadastrado!");
              break;
            case "emailDoResponsavel must be unique":
              res.send("Email do responsável já cadastrado!");
              break;
            default:
              res.send("Não foi possível realizar o cadastro!");
              break;
          }
        });
    }
  },
  editar: async (req, res) => {
    let CNPJvalido = true;
    const receitaFederal = await axios.get(
      `https://receitaws.com.br/v1/cnpj/${req.body.cnpj}`
    );
    const cnpjValido = {
      status: receitaFederal.data.status,
      nome: receitaFederal.data.nome,
      capital_social: Number(receitaFederal.data.capital_social),
    };
    if (cnpjValido.status == "ERROR") {
      res.send("O CNPJ inserido não está na Receita Federal!");
      CNPJvalido = false;
    } else if (cnpjValido.capital_social != 0) {
      res.send("A instituição possui fins lucrativos!");
      CNPJvalido = false;
    }
    if (CNPJvalido) {
      await Ong.update(
        {
          cnpj: req.body.cnpj,
          fotoDePerfil: req.body.fotoDePerfil,
          nome: req.body.nome,
          telefone: req.body.telefone,
          email: req.body.email,
          endereco: req.body.endereco,
          cidade: req.body.cidade,
          estado: req.body.estado,
          cep: req.body.cep,
          senha: req.body.senha,
          nomeDoResponsavel: req.body.nomeDoResponsavel,
          emailDoResponsavel: req.body.emailDoResponsavel,
        },
        {
          where: { cnpj: req.params.id },
          truncate: false,
        }
      )
        .then(function () {
          res.send("Usuário editado com sucesso!");
        })
        .catch(function (err) {
          var erro = err.errors[0].message;
          switch (erro) {
            case "PRIMARY must be unique":
              res.send("CNPJ já cadastrado!");
              break;
            case "telefone must be unique":
              res.send("Telefone já cadastrado!");
              break;
            case "email must be unique":
              res.send("Email já cadastrado!");
              break;
            case "emailDoResponsavel must be unique":
              res.send("Email do responsável já cadastrado!");
              break;
            default:
              res.send("Não foi possível realizar o cadastro!");
              break;
          }
        });
    }
  },
  mostrar: async (req, res) => {
    const users = await Ong.findAll();
    res.send(users);
  },
  deletar: async (req, res) => {
    await Ong.destroy({
      where: { cnpj: req.params.id },
      truncate: false,
    })
      .then(function () {
        res.send("Deletado com sucesso");
      })
      .catch(function (err) {
        res.send(err);
      });
  },
  itens: async (req, res) => {
    const ong = await Ong.findByPk(req.params.id, { include: AcaoSocial });
    var acoes = ong.acaosocials;
    let itens;
    let resposta = [];
    for (i in acoes) {
      itens = await AcaoSocial.findByPk(acoes[i].dataValues.id, {
        include: Item,
      });
      resposta[i] = {
        acaosocial: {
          id: acoes[i].dataValues.id,
          local: acoes[i].dataValues.local,
          objetivo: acoes[i].dataValues.objetivo,
          pessoasAjudadas: acoes[i].dataValues.pessoasAjudadas,
          dataAcao: acoes[i].dataValues.dataAcao,
          itens: itens,
        },
      };
    }
    if (ong != null) {
      res.send(resposta);
    } else {
      res.send("ONG não encontrada!");
    }
  },
};
