import { sequelize } from "../db/connection.js";
import { DataTypes } from "sequelize";

export const userModel = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
  },
  surname: {
    type: DataTypes.STRING,
  },
  dni: {
    type: DataTypes.INTEGER,
    unique: true,
    validate: {
      isNumeric: true,
    },
  },
  phoneNumber: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isNumeric: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
});
