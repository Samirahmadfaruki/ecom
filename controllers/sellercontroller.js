const dal = require("../model/sellersDal");

exports.getAll = async (req, res) => {
  let result = [];
  result = await dal.getAllSellers();
  res.send(result);
};

exports.getById = async (req, res) => {
  let result = [];
  result = await dal.getById(req.params.id);
  res.send(result);
};

exports.update = async (req, res) => {
  let result = [];
  result = await dal.update(req.params.id, req.body);
  res.send(result);
};

exports.remove = async (req, res) => {
  let result = [];
  result = await dal.remove(req.params.id);
  res.send(result);
};