const sql = require("./db.js");

class Doador extends Usuario {
	constructor(method1, method2) {
		this.method1 = method1;
		this.method2 = method2;
	}
}

module.exports = Person;