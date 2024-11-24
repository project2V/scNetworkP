import { upload } from "../config/upload.config.js";

export const uploadImage = (req, res, next) => {
  const uploadSingle = upload.single("content");

  uploadSingle(req, res, (error) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        message: "error al subir el archivo",
      });
    }

    if (!req.file) {
      return res.status(500).json({
        message: "error al subir el archivo, no se encontró",
      });
    }

    req.body["content"] = req.file.filename;

    next();
  });
};
