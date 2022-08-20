const Item = require('../models/Item.js');


module.exports = {
    async createItem(req, res) {
        const {nome, quantidade, foto, descricao} = req.body
        try {

            const item = await Item.create(
                {
                    "nome": nome,
                    "quantidade": quantidade,
                    "foto": foto,
                    "descricao": descricao
                });

            return res.send({ item });

        } catch (err) {
            return res.status(400).send({ error: err.message })
        }

    },

    async getItens(req, res) {
        try {
            const item = await Item.find();
            if (!item) {
                return res.status(400).send({ error: "Sem itens!" });
            }
            return res.status(200).send({ item });
        } catch (err) {
            return res.status(400).send({ error: err.message });

        }

    },

    async getItemById(req, res) {

        const { id } = req.params;
        try {
            const item = await Item.findOne({ _id: id });
            if (!item) {
                res.status(400).send({ erro: 'Item não existente' })
            }

            return res.status(200).send({ item });

        } catch (err) {
            res.status(400).send({ error: err.message });
        }
    },

    async updateItem(req, res) {

        const { id } = req.params;
        const { index, quantidade, descricao, foto } = req.body;

        try {
            const item = await Item.findOne({ _id: id });
            if (!item) {
                return res.status(404).send({ error: 'Item não encontrado' })
            }
            let itens = item.itens;
            itens[index].quantidade = quantidade;
            itens[index].descricao = descricao;
            itens[index].foto = foto;
            const result = await item.updateOne({ itens: itens });

            return res.status(200).send(result);

        } catch (err) {
            return res.status(400).send({ error: err.message });

        }
    },

    async deleteItem(req, res) {

        const { id } = req.params;
        const { index } = req.body;

        try {
            const item = await Item.findOne({ _id: id });
            if (!item) {
                return res.status(404).send({ error: 'Item não encontrada' })
            }
            let itens = item.itens;
            itens.splice(index, 1);
            const result = await item.updateOne({ itens: itens });

            return res.status(200).send(result);


        } catch (err) {

            return res.status(400).send({ error: err.message });

        }
    },

}