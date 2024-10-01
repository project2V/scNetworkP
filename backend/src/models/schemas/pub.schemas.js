import { body } from "express-validator";

export const publiSchema = [
  body("title")
    .exists()
    .notEmpty()
    .withMessage("Title is required")
    .isString()
    .isLength({ min: 4, max: 20 })
    .withMessage("Title must be between 4 and 20 characters long")
    .trim(),
  body("description")
    .exists()
    .notEmpty()
    .withMessage("Description is required")
    .isString()
    .isLength({ min: 10, max: 500 })
    .withMessage("Description must be between 10 and 500 characters long")
    .trim(),
  body("publicationDate")
    .exists()
    .notEmpty()
    .withMessage("Publication date is required")
    .isISO8601()
    .withMessage("Publication date must be a valid ISO 8601 date")
    .trim(),
];
