import { findOneByToken } from "../services/user.service.js";

export const getUserByTokenController = async (req, res) => {
  try {
    const token = req.params.token;

    if (!token) {
      return res.status(400).json({ message: "Token no válido" });
    }

    const user = await findOneByToken(token);

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los datos del usuario" });
  }
};
