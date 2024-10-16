import { userModel } from "../models/user.models.js";
import * as jwt from "jsonwebtoken";
import { environments } from "../config/environments.js";
import { compare } from "bcrypt";

export const createUser = async (user) => {
  try {
    const newUser = await userModel.create(user);
    return newUser;
  } catch (err) {
    console.error(err);
    throw new Error("Error creating user");
  }
};

export const getUserByEmail = async (email) => {
  try {
    return await userModel.findOne({ where: { email } });
  } catch (err) {
    console.error(err);
    throw new Error("Error getting user by email");
  }
};

export const getUserByEmailAndPassword = async (email, password) => {
  const user = await userModel.findOne({ where: { email } });
  if (!user) {
    throw new Error("Datos erroneos");
  }

  const isPasswordValid = await compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Datos erroneos");
  }

  return user;
};

export const findOneByToken = async (token) => {
  const decodedToken = jwt.decode(token, environments.SECRET);

  if (!decodedToken) {
    throw new Error("Token inválido");
  }

  const userId = decodedToken.id;

  const user = await userModel.findByPk(userId);

  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  return user;
};
