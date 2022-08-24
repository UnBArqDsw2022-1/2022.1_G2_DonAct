const Ong = require("../models/ONGModel")

module.exports = {
    inicial: async (req, res) => {
      res.send("Página Inicial")
    }, 
    cadastrar: async (req, res) => {
      const selectCNPJ = await Ong.findByPk(req.body.cnpj)
      const selectTel = await Ong.findOne({ where: { telefone: req.body.telefone } })
      const selectEmail = await Ong.findOne({ where: { email: req.body.email } })
      const selectEmailResp = await Ong.findOne({ where: { emailDoResponsavel: req.body.emailDoResponsavel } })
      //const validaDados = require("../utils/utils")

      if(validaDados(req.body, res) == true){
        if(selectCNPJ == null){
          if(selectTel == null){
            if(selectEmail == null){
              if(selectEmailResp == null){
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
      //const validaDados = require("../utils/utils")

      if(selectCNPJ != null) { 
        if (validaDados(req.body, res) == true){
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

function validaDados(object, resp){
  if(object.cnpj.toString().length == 14) {
    if(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(object.nome) == true){
      if(/^[0-9]+$/.test(object.telefone) && object.telefone.toString().length == 11){
        if(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(object.cidade) == true){
          if(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(object.estado) == true){
            if(/^[0-9]+$/.test(object.cep) && object.cep.toString().length == 8){
              if(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(object.nomeDoResponsavel) == true){
                //if(/^[a-z0-9@]$/.test(object.emailDoResponsavel) == true) {
                  return true
                //}
              } else { 
                resp.send("Nome do responsável inválido. Digite somente letras.")
                return false
              }
            } else { 
              resp.send("CEP inválido. Digite apenas 8 números.")
              return false
            }
          } else { 
            resp.send("Estado inválido. Digite somente letras.")
            return false
          }
        } else { 
          resp.send("Cidade inválida. Digite somente letras.")
          return false
        }
      } else { 
        resp.send("Telefone inválido. Digite apenas 11 números.")
        return false
      }
    } else { 
      resp.send("Nome inválido. Digite somente letras.")
      return false
    }
  } else { 
    resp.send("Cnpj inválido. Digite apenas 14 números.")  
    return false
  }
} 