"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Rol, {
        foreignKey: "rol_id",
      });
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.INTEGER,
        unique: true,
      },
      password: DataTypes.STRING,
      email: {
        type: DataTypes.INTEGER,
        unique: true,
      },
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      address: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      rol_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};