'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Treatment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Treatment.init({
    name: DataTypes.STRING,
    duration: DataTypes.STRING,
    num_sessions: DataTypes.INTEGER,
    price: DataTypes.STRING,
    specialty: DataTypes.STRING,
    description: DataTypes.STRING,
    availability: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Treatment',
  });
  return Treatment;
};