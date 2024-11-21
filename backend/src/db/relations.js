import { sequelize } from "./connection.js";
import { userModel } from "../models/user.models.js";
import { publicationsModel } from "../models/pub.models.js";
import { Sequelize } from "sequelize";

// Relacionamos la publicación con el usuario
userModel.hasMany(publicationsModel, { foreignKey: "usersId" });
publicationsModel.belongsTo(userModel, { foreignKey: "usersId" });

sequelize.sync();
