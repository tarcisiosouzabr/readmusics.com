import database from "infra/database.js";
const { DataTypes } = require("sequelize");

const User = database.getSequelize().define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "User",
    // Other model options go here
  },
);
export default {
  User,
};
