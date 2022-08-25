const validaDados = (object, resp) => {
  if (object.cnpj.toString().length == 14) {
    if (/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(object.nome) == true) {
      if (/\S+@\S+\.\S+/.test(object.email) == true) {
        if (/^[0-9]+$/.test(object.telefone) && object.telefone.toString().length == 11) {
          if (/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(object.cidade) == true) {
            if (/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(object.estado) == true) {
              if (/^[0-9]+$/.test(object.cep) && object.cep.toString().length == 8) {
                if (/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(object.nomeDoResponsavel) == true) {
                  if (/\S+@\S+\.\S+/.test(object.emailDoResponsavel) == true) {
                    return true
                  }
                  else {
                    resp.send("Email do responsável inválido. Digite um email válido.")
                  }
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
        resp.send("Email da ONG inválido. Digite um email válido.")
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

module.exports = validaDados
