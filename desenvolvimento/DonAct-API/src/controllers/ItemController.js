const Item = require('../models/ItemModel.js');


module.exports = {
    cadastrar: async(req, res) => {

        try {
            await Item.create(req.body)
            res.send("Item criado com sucesso!")

            return res.send({ item });

        } catch (err) {
            return res.status(400).send({ error: err.message })
        }

    },

    mostrar: async (req, res) => {
        try {
            const item = await Item.findAll();
            if (!item) {
                return res.status(400).send({ error: "Sem itens!" });
            }
            return res.status(200).send({ item });
        } catch (err) {
            return res.status(400).send({ error: err.message });

        }

    },

    mostrarId: async (req, res) => {
        
        try {
            const item = await Item.findByPk(req.params.id)
            if (!item) {
                res.status(400).send({ erro: 'Item não existente' })
            }

            return res.status(200).send({ item });

        } catch (err) {
            res.status(400).send({ error: err.message });
        }
    },

    editar: async (req, res) => {

        try {
            const item = await Item.findByPk(req.params.id)
            if (!item) {
                return res.status(404).send({ error: 'Item não encontrado' })
            }
            else {
                await Item.update(
                    {
                    "quantidade": req.body.quantidade,
                    "descrição": req.body.descricao,
                    "foto": req.body.foto,
                    "nome": req.body.nome,
                    },
                    {
                        where: {"id": req.params.id},
                        truncate: false,
                    });
            }

            return res.status(200).send("Item editado com sucesso!");

        } catch (err) {
            return res.status(400).send({ error: err.message });

        }
    },

    deletar: async (req, res) => {

        try {
            const item = await Item.findByPk(req.params.id)
            if (!item) {
                return res.status(404).send({ error: 'Item não encontrada' })
            }
            else {
                await Item.destroy({
                    where: {"id":req.params.id},
                    truncate: false,
                  }, res.send("Deletado com sucesso"))
            }

            return res.status(200).send(result);


        } catch (err) {

            return res.status(400).send({ error: err.message });

        }
    },

}