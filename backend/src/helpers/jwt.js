import jwt from "jsonwebtoken";
import { environments } from "../config/environments.js";

export const createJWT = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, environments.SECRET, (err, token) => {
      if (err) {
        reject("Error al firmar el token");
      }
      resolve(token);
    });
  });
};

export const verifyJWT = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "No token" });
  }
  jwt.verify(token, environments.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Error de verificación" });
    }
    req.user = decoded;
    next();
  });
};
