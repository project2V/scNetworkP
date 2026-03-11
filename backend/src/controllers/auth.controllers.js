import {
  createUser,
  getUserByEmail,
  getUserByEmailAndPassword,
  findOneById,
} from "../services/user.service.js";
import { createJWT } from "../helpers/jwt.js";
import jwt from "jsonwebtoken";
import { environments } from "../config/environments.js";

export const registerUser = async (req, res) => {
  try {
    const user = req.body;

    const existingUser = await getUserByEmail(user.email);
    if (existingUser) {
      return res.status(409).send({ message: "Este email ya está registrado" });
    }

    const newUser = await createUser(user);
    const token = await createJWT({ id: newUser.id });

    res.status(201).json({ token: token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await getUserByEmailAndPassword(email, password);

    if (!user) {
      return res.status(401).send({ message: "Credenciales incorrectas" });
    }

    const token = await createJWT({ id: user.id });

    return res.status(200).json({ token: token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const userInfoTokenGetByFrontend = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: "No token" });
    }
    const token = authHeader.split(" ")[1];
    const user = jwt.verify(token, environments.SECRET);
    const findUser = await findOneById(user.id);
    res.status(200).json(findUser);
  } catch (error) {
    res.status(500).json({ error: "Error de verificación" });
  }
};
