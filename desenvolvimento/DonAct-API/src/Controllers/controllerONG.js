const ONG = require("../Models/modelONG")

module.exports = {
  index: function(req, res) {
    ONG.get(req.con, function(err, rows) {
      res.render("ong/index", { data: rows })
    })
  },

  create: function(req, res) {
    res.render("ong/create")
  },

  store: function(req, res) {
    ONG.create(req.con, req.body, function(err) {
      res.redirect("/ong")
    })
  },

  edit: function(req, res) {
    ONG.getById(req.con, req.params.id, function(err, rows) {
      res.render("ong/edit", { data: rows[0] })
    })
  },

  update: function(req, res) {
    ONG.update(req.con, req.body, req.params.id, function(err) {
      res.redirect("/ong")
    })
  },

  destroy: function(req, res) {
    ONG.destroy(req.con, req.params.id, function(err) {
      res.redirect("/ong")
    })
  }
}
