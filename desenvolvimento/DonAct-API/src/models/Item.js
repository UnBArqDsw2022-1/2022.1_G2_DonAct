const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    quantidade: {
        type: Int,
        required: true,
    },
    foto: {
        type: Blob,
        required: true,

    }

})

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;