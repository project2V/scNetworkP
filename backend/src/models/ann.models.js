import { sequelize } from "../db/connection.js";
import { DataTypes } from "sequelize";

export const announcementsModel = sequelize.define("announcements", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  publicationDate: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
    allowNull: false
  }
})