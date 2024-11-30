import { publicationsModel } from "../models/pub.models.js";
import { userModel } from "../models/user.models.js";

export const createPublication = async (req, res) => {
  try {
    console.log(req.body);
    const newPublication = await publicationsModel.create({
      ...req.body,
      UserId: req.params.usersId,
    });
    res.status(201).json(newPublication);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export const getPublications = async (req, res) => {
  try {
    const publications = await publicationsModel.findAll({
      include: [{ model: userModel }],
    });
    res.json(publications).status(200);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deletePublications = async (req, res) => {
  try {
    const publicationId = req.params.id;
    const publication = await publicationsModel.findByPk(publicationId);
    if (publication) {
      await publicationsModel.destroy({ where: { id: publicationId } });
      res.status(200).json({ message: "Publication deleted successfully" });
    } else {
      res.status(404).json({ message: "Publication not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Trouble deleting publication" });
  }
};
