const sql = require("./db.js");
const mongoose = require('mongoose');

const DoadorSchema = new mongoose.Schema({
    fotoDePerfil: {
        type: Blob,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    dataNascimento: {
        type: String,
        required: true
    }
})

const Doador = mongoose.model('Doador', DoadorSchema);

module.exports = Doador;