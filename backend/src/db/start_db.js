import { sequelize } from "./connection.js";

export const db_start = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection established with database");
    sequelize.sync({ force: false });
  } catch (error) {
    console.error("Unable to connect to database", error);
  }
};
