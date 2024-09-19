import { sequelize } from "../db/connection.js";
import { DataTypes } from "sequelize";

export const publicationsModel = sequelize.define("publications", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  publicationDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
})