import { sequelize } from "../db/connection.js";
import { DataTypes } from "sequelize";

export const publicationsModel = sequelize.define("publications", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description1: {
    type: DataTypes.TEXT,
    allowNull: null,
  },
  description2: {
    type: DataTypes.TEXT,
    allowNull: null,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  publicationDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});
