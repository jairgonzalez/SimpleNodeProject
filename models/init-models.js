var DataTypes = require("sequelize").DataTypes;
var _Player = require("./Player");
var _Team = require("./Team");

function initModels(sequelize) {
  var Player = _Player(sequelize, DataTypes);
  var Team = _Team(sequelize, DataTypes);


  return {
    Player,
    Team,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
