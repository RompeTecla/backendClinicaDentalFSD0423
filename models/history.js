'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      History.belongsTo(models.Pacient,{
        foreignKey : "pacient_id"
      });
    }
  }
  History.init({
    pacient_id : DataTypes.INTEGER,
    date: DataTypes.STRING,
    history: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};