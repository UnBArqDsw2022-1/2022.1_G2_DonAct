const Ong = require("../models/ONGModel")
const validaDados = require("../utils/utils")

module.exports = {
  inicial: async (req, res) => {
    res.send("Página Inicial")
  },
  cadastrar: async (req, res) => {
    const selectCNPJ = await Ong.findByPk(req.body.cnpj)
    const selectTel = await Ong.findOne({ where: { telefone: req.body.telefone } })
    const selectEmail = await Ong.findOne({ where: { email: req.body.email } })
    const selectEmailResp = await Ong.findOne({ where: { emailDoResponsavel: req.body.emailDoResponsavel } })

    if (validaDados(req.body, res) == true) {
      if (selectCNPJ == null) {
        if (selectTel == null) {
          if (selectEmail == null) {
            if (selectEmailResp == null) {
              await Ong.create(req.body)
              res.send("Cadastrado com sucesso!")
            } else { res.send("Esse email de responsável já está cadastrado.") }
          } else { res.send("Esse email já está cadastrado.") }
        } else { res.send("Esse telefone já está cadastrado.") }
      } else { res.send("Esse CNPJ já está cadastrado.") }
    }
  },
  editar: async (req, res) => {
    const selectCNPJ = await Ong.findByPk(req.params.id)
    const selectTel = await Ong.findOne({ where: { telefone: req.body.telefone }})
    const selectEmail = await Ong.findOne({ where: { email: req.body.email } })
    const selectEmailResp = await Ong.findOne({ where: { emailDoResponsavel: req.body.emailDoResponsavel } })
    if (selectCNPJ != null) {
      if (validaDados(req.body, res) == true) {
        if (req.params.id == req.body.cnpj || selectCNPJ == null) {
          if (selectCNPJ.telefone == req.body.telefone || selectTel == null ) {
            if (selectCNPJ.email == req.body.email || selectEmail == null) {
              if (selectCNPJ.emailDoResponsavel == req.body.emailDoResponsavel || selectEmailResp == null) {
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
                  });
                res.send("Usuário editado com sucesso!")
              }
              else {
                res.send("Esse email de responsável já está cadastrado.")
              }
            }
            else {
              res.send("Esse email de ONG já está cadastrado.")
            }
          }
          else {
            res.send("Esse telefone já está cadastrado.")
          }
        } else {
          res.send("CNPJ já cadastrado!")
        }
      }
      else
        res.send("Usuário não encontrado!")
    }
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