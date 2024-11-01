import { body } from "express-validator";

export const publiSchema = [
  body("title")
    .exists()
    .notEmpty()
    .withMessage("Title is required")
    .isString()
    .isLength({ min: 4, max: 80 })
    .withMessage("Title must be between 4 and 80 characters long")
    .trim(),
  //body("content").isString(),
  body("description1")
    .exists()
    .notEmpty()
    .withMessage("Description is required")
    .isString()
    .isLength({ min: 10, max: 100 })
    .withMessage("Description must be between 10 and 500 characters long")
    .trim(),
  body("description2")
    .exists()
    .notEmpty()
    .withMessage("Description is required")
    .isString()
    .isLength({ min: 10, max: 100 })
    .withMessage("Description must be between 10 and 500 characters long")
    .trim(),
  body("amount")
    .exists()
    .notEmpty()
    .withMessage("Amount is required")
    .isNumeric()
    .isLength({ min: 1, max: 100 })
    .withMessage("Amount must be between 1 and 100 characters long")
    .trim(),
  /*body("publicationDate")
    .exists()
    .notEmpty()
    .withMessage("Publication date is required")
    .isISO8601()
    .withMessage("Publication date must be a valid ISO 8601 date")
    .trim(),*/
];
