const Ong = require("../models/ONGModel")

module.exports = {
    inicial: async (req, res) => {
      res.send("Página Inicial")
    }, 
    cadastrar: async (req, res) => {
      const select = await Ong.findByPk(req.body.cnpj)

      switch(validaDados(req.body)){
        case 1:
          res.send("Cnpj inválido. Digite apenas 14 números.")
          break
        case 2:
          res.send("Nome inválido. Digite somente letras.")
          break
        case 3:
          res.send("Telefone inválido. Digite apenas 11 números.")
          break
        case 4:
          res.send("Cidade inválida. Digite somente letras.")
          break
        case 5:
          res.send("Estado inválido. Digite somente letras.")
          break
        case 6:
          res.send("CEP inválido. Digite apenas 8 números.")
          break
        case 7:
          res.send("Nome do responsável inválido. Digite somente letras.")
          break
        //case 8:
        //  res.send("Email inválido.")
        //  break
        case 9:
          if (select == null){
            await Ong.create(req.body) 
            res.send("Cadastrado com sucesso!")
            break
          } else {
            res.send("Esse CNPJ já está cadastrado.")
            break
          }
        default:
          res.send("Não foi possível completar o cadastro.")
          break
      }
      
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
      console.log(req.body.cnpj)
      console.log("cpnj: "+typeof(req.body.cnpj))
      console.log("nome: "+typeof(req.body.nome))
      console.log("email: "+typeof(req.body.email))
      console.log("telefone: "+typeof(req.body.telefone))
      console.log("cidade: "+typeof(req.body.cidade))
      console.log("estado: "+typeof(req.body.estado))
      console.log("cep: "+typeof(req.body.cep))
      console.log("nome resp: "+typeof(req.body.nomeDoResponsavel))
      console.log("email resp: "+typeof(req.body.emailDoResponsavel))

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

function validaDados(object, res){
  console.log(typeof(res))
  if(object.cnpj.toString().length == 14) {
    if(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(object.nome) == true){
      if(/^[0-9]+$/.test(object.telefone) && object.telefone.toString().length == 11){
        if(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(object.cidade) == true){
          if(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(object.estado) == true){
            if(/^[0-9]+$/.test(object.cep) && object.cep.toString().length == 8){
              if(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(object.nomeDoResponsavel) == true){
                //if(/^[a-z0-9@]$/.test(object.emailDoResponsavel) == true) {
                  return 9
                //} else { return 8 }
              } else { return 7 }
            } else { return 6 }
          } else { return 5 }
        } else { return 4 }
      } else { return 3 }
    } else { return 2 }
  } else { return 1 }
}
