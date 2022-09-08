const Doador = require('../models/DoadorModel');
module.exports = {
    inicial: async (req, res) => {
        res.send("Página Inicial")
    },
    async mostrar(req, res) {
        try {
            const users = await Doador.findAll();
            return res.status(201).send({ count: Object.keys(users).length, users: users });
        }
        catch (err) {
            return res.status(500).send({ error: err.message });
        }
    },
    async encontrar(req, res) {
        try {
            const user = await Doador.findOne({ where: { "cpf": req.params.id } });
            if (user != null)
                return res.status(201).send({ user: user })
            else
                return res.status(404).send({ user: "Não encontrado doador com CPF: " + req.params.id })
        }
        catch (err) {
            res.status(500).send({ error: err.message });
        }

    },
    async cadastrar(req, res) {
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
    },
    async deletar(req, res) {
        try {
            const user = await Doador.findOne({ where: { "cpf": req.params.id } });
            if (user != null) {
                await Doador.destroy({ where: { "cpf": user.cpf } });
                return res.status(201).send({ user: user });
            }
            else
                return res.status(404).send({ user: "Não encontrado doador com CPF: " + req.params.id });
        }
        catch (err) {
            return res.status(404).send({ user: "Não foi possível deletar doador com CPF: " + req.params.id });
        }

    }
    , async editar(req, res) {
        try {
            const user = await Doador.findOne({ where: { "cpf": req.params.id } });
            if (user != null) {
                await Doador.update({
                    "fotoDePerfil": req.body.fotoDePerfil,
                    "nome": req.body.nome,
                    "telefone": req.body.telefone,
                    "email": req.body.email,
                    "endereco": req.body.endereco,
                    "cidade": req.body.cidade,
                    "estado": req.body.estado,
                    "cep": req.body.cep,
                    "senha": req.body.senha,
                    "cpf": req.body.cpf,
                    "dataNascimento": req.body.dataNascimento
                },
                    { where: { "cpf": user.cpf }, truncate: false });
                return res.status(201).send({ user: user });
            }
            else
                return res.status(404).send({ user: "Não encontrado doador com CPF: " + req.params.id });
        }
        catch (err) {
            return res.status(404).send({ user: "Não foi possível editar doador com CPF: " + req.params.id });
        }
    }
}