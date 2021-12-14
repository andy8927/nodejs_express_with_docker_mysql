const { getUsers } = require("../model/users");

const getAllUsers = (req, res, next) => {
  getUsers();
  res.send("respond with a resource");
};

module.exports = {
  getAllUsers,
};
