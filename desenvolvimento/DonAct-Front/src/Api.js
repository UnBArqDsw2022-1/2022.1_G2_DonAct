export async function handlePostDoador(params) {
    try {
      const response = await fetch('http://localhost:8080/doador/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {fotoDePerfil: params.fotoDePerfil,
               nome: params.nome,
                telefone: params.telefone,
                email: params.email,
                endereco: params.endereco,
                cidade: params.cidade,
                estado: params.estado,
                senha: params.senha,
                cpf: params.cpf,
                dataNascimento: params.cpf}
      })
  
      const data = await response.json()
      
      return data
    } catch (error) {
      throw error
    }
  }
  
  export async function handleGetDoador(id) {
    try {
      const response = await fetch(`http://localhost:8080/doador/encontrar/${id}`)
  
      const data = await response.json()
      
      return data
    } catch (error) {
      throw error
    }
  }

  export async function handleGetDoadorAll(id) {
    try {
      const response = await fetch('http://localhost:8080/doador/mostrar')
  
      const data = await response.json()
      
      return data
    } catch (error) {
      throw error
    }
  }


