export async function handlePostDoador(params) {
  const body = {
    fotoDePerfil: params.fotoDePerfil,
    nome: params.nome,
    telefone: params.telefone,
    email: params.email,
    endereco: params.endereco,
    cidade: params.cidade,
    estado: params.uf,
    senha: params.senha,
    cpf: params.cpf,
    dataNascimento: params.cpf,
  }

  try {
    const response = await fetch("http://localhost:8080/doador/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function handleGetDoador(id) {
  try {
    const response = await fetch(
      `http://localhost:8080/doador/encontrar/${id}`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function handleGetDoadorAll(id) {
  try {
    const response = await fetch("http://localhost:8080/doador/mostrar");

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
}
