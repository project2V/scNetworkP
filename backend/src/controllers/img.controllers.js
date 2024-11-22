import multer from "multer";
import path from "path";
const __dirname = import.meta.dirname;

const storage = multer.diskStorage({
  destination: path.resolve(__dirname, "../media"),
  filename: (req, file, cb) => {
    cb(null, file.originalname + "-" + Date.now());
  },
});

const media = { dest: "media" };

const upload = multer({ storage: storage });

export const uploadImage = async (req, res) => {
  try {
    // Apply Multer middleware to handle file upload
    upload.single("image")(req, res, (err) => {
      // Wrap in callback function
      if (err) {
        console.error(err);
        return res.status(500).json({ error: err.message });
      }

      // Verificar si se subió un archivo (check after upload)
      if (!req.file) {
        return res.status(400).json({ error: "No se subió ninguna imagen" });
      }

      const conn = req.getConnection((err, connection) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ error: err.message });
        }

        // Obtener el nombre del archivo subido
        const { filename } = req.file;

        // Insertar el nombre del archivo en la base de datos
        connection.query(
          "INSERT INTO publications (content) VALUES (?)", // Asegúrate de que 'publications' y 'content' sean los nombres correctos de tu tabla y columna
          [filename],
          (err, result) => {
            if (err) {
              console.log(err);
              return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ message: "Imagen subida correctamente" });
          }
        );
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
