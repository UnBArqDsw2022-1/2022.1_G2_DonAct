const ONGRouter = require('../routes/ONGRouter')
const ItemRouter = require('../routes/ItemRouter')
const AcaoSocialRouter = require('../routes/AcaoSocialRouter')
const DoadorRouter = require('../routes/DoadorRouter')
module.exports = {
	iniciarRotas: (app) => {
		app.use("/item", ItemRouter)
		app.use("/acaosocial", AcaoSocialRouter)
		app.use("/ong", ONGRouter)
		app.use("/doador", DoadorRouter)
	}
}