const Ong = require('../models/ONGModel')
const Item = require('../models/ItemModel')
const AcaoSocial = require('../models/AcaoSocialModel')

module.exports = {
	relacionamentos: () => {
		Ong.hasMany(AcaoSocial, {
			foreignKey: {
				allowNull: false
			}
		})
		AcaoSocial.belongsTo(Ong)

		AcaoSocial.hasMany(Item, {
			foreignKey: {
				allowNull: false
			}
		})
		Item.belongsTo(AcaoSocial)
	},
	sincronizarModel: () => {
		Ong.sync()
		AcaoSocial.sync()
		Item.sync()
	},
	excluirTabelas: () => {
		Item.drop()
		AcaoSocial.drop()
		Ong.drop()
	},
	popularBanco: () => {
		Ong.create(
			{
				"cnpj": 22162485000152,
				"fotoDePerfil": {
					"type": "Buffer",
					"data": [
						91,
						111,
						98,
						106,
						101,
						99,
						116,
						32,
						79,
						98,
						106,
						101,
						99,
						116,
						93
					]
				},
				"nome": "ZENIT AEROSPACE",
				"telefone": 61123654153,
				"email": "zenit@gmail.com",
				"endereco": "unb gama",
				"cidade": "bsb",
				"estado": "df",
				"cep": 76952202,
				"senha": "sdas50d32",
				"nomeDoResponsavel": "yan andrade",
				"emailDoResponsavel": "yanAndrade@gmail.com",
				"createdAt": "2022-08-30T14:43:28.000Z",
				"updatedAt": "2022-09-05T13:39:23.000Z"
			}
		)
	}
}