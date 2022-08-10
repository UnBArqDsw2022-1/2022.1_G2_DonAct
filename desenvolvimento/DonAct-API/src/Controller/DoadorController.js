const Doador = require('../models/Doador.js');

module.exports = {
    async createDoador(req, res) {
        const { fotoDePerfil, nome, telefone, email, endereco, cidade, estado, cep, senha, cpf, dataNascimento } = req.body
        try {
            const doador = await Doador.create({
                "fotoDePerfil": fotoDePerfil,
                "nome": nome,
                "telefone": telefone,
                "email": email,
                "endereco": endereco,
                "cidade": cidade,
                "estado": estado,
                "cep": cep,
                "senha": senha,
                "cpf": cpf,
                "dataNascimento": dataNascimento
            });
            return res.status(201).send({ doador });
        } catch (err) {
            return res.status(500).send({ error: err.message });
        }

    }
}