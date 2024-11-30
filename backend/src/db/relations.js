import { sequelize } from "./connection.js";
import { userModel } from "../models/user.models.js";
import { publicationsModel } from "../models/pub.models.js";

// Relacionamos la publicación con el usuario
userModel.hasMany(publicationsModel);
publicationsModel.belongsTo(userModel);

export const db_start = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection established with database");
    sequelize.sync({ force: false });
  } catch (error) {
    console.error("Unable to connect to database", error);
  }
};
