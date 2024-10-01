import { body } from "express-validator";

export const annSchema = [
  body("title")
    .exists()
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isString()
    .isLength({ min: 4, max: 20 })
    .withMessage("Title must be between 4 and 20 characters long"),
  body("description")
    .exists()
    .trim()
    .notEmpty()
    .withMessage("Description is required")
    .isString()
    .isLength({ min: 10, max: 500 })
    .withMessage("Description must be between 10 and 500 characters long"),
  body("publicationDate")
    .exists()
    .withMessage("Publication Date is required")
    .isISO8601()
    .withMessage("Publication Date must be a valid ISO 8601 date"),
];
