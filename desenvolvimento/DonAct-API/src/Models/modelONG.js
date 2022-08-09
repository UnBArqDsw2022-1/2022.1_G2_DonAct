module.exports = {
    get: function(con, callback) {
      con.query("SELECT * FROM ONG", callback)
    },
  
    getById: function(con, id, callback) {
      con.query(`SELECT * FROM ONG WHERE id_ONG = ${id}`, callback)
    },
  
    create: function(con, data, callback) {
      con.query(
        `INSERT INTO ONG SET 
        nome = '${data.nome}', 
        cnpj = '${data.cnpj}',
        fotoDePerfil = '${data.fotoDePerfil}',
        telefone = '${data.telefone}',
        email = '${data.email}',
        endereco = '${data.endereco}',
        cidade = '${data.cidade}',
        estado = '${data.estado}',
        cep = '${data.cep}',
        senha = '${data.senha}',
        nomeDoResponsavel = '${data.nomeDoResponsavel}',
        emailDoResponsavel = '${data.emailDoResponsavel}',`,
        callback
      )
    },
  
    update: function(con, data, id, callback) {
      con.query(
        `UPDATE ONG SET 
        nome = '${data.nome}', 
        cnpj = '${data.cnpj}',
        fotoDePerfil = '${data.fotoDePerfil}',
        telefone = '${data.telefone}',
        email = '${data.email}',
        endereco = '${data.endereco}',
        cidade = '${data.cidade}',
        estado = '${data.estado}',
        cep = '${data.cep}',
        senha = '${data.senha}',
        nomeDoResponsavel = '${data.nomeDoResponsavel}',
        emailDoResponsavel = '${data.emailDoResponsavel}' 
        WHERE id_ONG = ${id}`,
        callback
      )
    },
  
    destroy: function(con, id, callback) {
      con.query(`DELETE FROM ONG WHERE id_ONG = ${id}`, callback)
    }
}
