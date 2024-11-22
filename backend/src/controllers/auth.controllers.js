import {
  createUser,
  getUserByEmail,
  getUserByEmailAndPassword,
} from "../services/user.service.js";
import { createJWT } from "../helpers/jwt.js";

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
    console.log(req.body);
    const user = await getUserByEmailAndPassword(email, password);

    if (!user) {
      return res.status(401).send({ message: "Credenciales incorrectas" });
    }

    const token = await createJWT({ user: user.id });
    console.log(token);

    return res.status(200).json({ token: token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
