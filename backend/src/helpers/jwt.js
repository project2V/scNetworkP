import jwt from "jsonwebtoken";
import { environments } from "../config/environments.js";

export const createJWT = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      environments.SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) {
          reject("Error al firmar el token");
        }
        resolve(token);
      }
    );
  });
};

export const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "No token" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, environments.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Error de verificación" });
    }
    req.user = decoded;
    next();
  });
};
