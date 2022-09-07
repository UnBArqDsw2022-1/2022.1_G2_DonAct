const AcaoSocial = require('../models/AcaoSocialModel.js');


module.exports = {
    cadastrar: async (req, res) => {
        try {
            await AcaoSocial.create(req.body)
            res.status(200).send("Ação Social cadastrada com sucesso!")
        } catch (err) {
            res.status(400).send({ error: err.message })
        }

    },

    mostrar: async (req, res) => {
        try {
            const acoes = await AcaoSocial.findAll();
            res.status(200).send(acoes);
        } catch (err) {
            res.status(400).send({ error: err.message })
        }
    }
}