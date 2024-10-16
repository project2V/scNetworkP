import "dotenv/config";

export const environments = {
  PORT: process.env.PORT,
  SECRET: process.env.SECRET,
  DB: {
    DATABASE_NAME: process.env.DB_NAME,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    HOST: process.env.DB_HOST,
    DIALECT: process.env.DB_DIALECT,
    PORT: process.env.DB_PORT,
  },
};
