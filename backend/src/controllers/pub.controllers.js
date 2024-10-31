import { publicationsModel } from "../models/pub.models.js";

export const createPublication = async (req, res) => {
  try {
    const newPublication = await publicationsModel.create(req.body);
    res.status(201).json(newPublication);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPublications = async (req, res) => {
  try {
    const publications = await publicationsModel.findAll();
    res.json(publications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
