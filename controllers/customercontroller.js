const dal = require("../model/customersDal");

exports.getAll = async (req, res) => {
  let data = [];
  data = await dal.getAllCustomers();
  res.send(data);
};

// exports.customerPage = async (req, res) => {
//   res.render("../views/customerprofile");
// };

exports.getById = async (req, res) => {
  let result = [];
  result = await dal.getById(req);
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