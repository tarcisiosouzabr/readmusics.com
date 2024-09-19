"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}
  }
  console.log(DataTypes);
  console.log(sequelize);
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "User",
    },
  );
  return User;
};
