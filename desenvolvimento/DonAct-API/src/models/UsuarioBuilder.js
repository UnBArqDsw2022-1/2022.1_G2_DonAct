const sql = require("./db.js");

class UsuarioBuilder {
    constructor(
        fotoDePerfil, nome, telefone, email, endereco, cidade, estado, cep, senha, cnpj, nomeDoResponsavel, emailDoResponsavel, cpf, dataNascimento
    ) {
        this.fotoDePerfil = undefined;
        this.nome = undefined;
        this.telefone = undefined;
        this.email = undefined;
        this.endereco = undefined;
        this.cidade = undefined;
        this.estado = undefined;
        this.cep = undefined;
        this.senha = undefined;
        this.cnpj = undefined;
        this.nomeDoResponsavel = undefined;
        this.emailDoResponsavel = undefined;
        this.cpf = undefined;
        this.dataNascimento = undefined;
    }

    setFotoDePerfil(fotoDePerfil) {
        this.fotoDePerfil = fotoDePerfil;
        return this;
    }

    setNome(nome) {
        this.nome = nome;
        return this;
    }

    setTelefone(telefone) {
        this.telefone = telefone;
        return this;
    }

    setEmail(email) {
        this.email = email;
        return this;
    }

    setEndereco(endereco) {
        this.endereco = endereco;
        return this;
    }

    setCidade(cidade) {
        this.cidade = cidade;
        return this;
    }

    setCidade(estado) {
        this.estado = estado;
        return this;
    }

    setCep(cep) {
        this.cep = cep;
        return this;
    }

    setSenha(senha) {
        this.senha = senha;
        return this;
    }

    setCnpj(cnpj) {
        this.cnpj = cnpj;
        return this;
    }

    setNomeDoResponsavel(nomeDoResponsavel) {
        this.nomeDoResponsavel = nomeDoResponsavel;
        return this;
    }

    setEmailDoResponsavel(emailDoResponsavel) {
        this.emailDoResponsavel = emailDoResponsavel;
        return this;
    }

    setCpf(cpf) {
        this.cpf = cpf;
        return this;
    }

    setDataNascimento(dataNascimento) {
        this.dataNascimento = this.dataNascimento;
        return this;
    }

}

module.exports = UsuarioBuilder;