import { body } from "express-validator";

export const registerUserSchema = [
  body("name")
    .exists()
    .notEmpty()
    .withMessage("Name is required")
    .isString()
    .isLength({ min: 3, max: 20 })
    .matches(/^[a-zA-Z]+$/, "g")
    .trim(),
  body("surname")
    .exists()
    .notEmpty()
    .withMessage("Surname is required")
    .isString()
    .isLength({ min: 3, max: 20 })
    .matches(/^[a-zA-Z]+$/, "g")
    .trim(),
  body("dni")
    .exists()
    .notEmpty()
    .withMessage("DNI is required")
    .isNumeric()
    .isLength({ min: 8, max: 8 })
    .trim(),
  body("phoneNumber")
    .exists()
    .notEmpty()
    .withMessage("Phone number is required")
    .isNumeric()
    .isLength({ min: 10, max: 10 })
    .trim(),
  body("email")
    .exists()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .normalizeEmail()
    .isEmail()
    .trim(),
  body("password")
    .exists()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8, max: 30 })
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "g"
    )
    .trim(),
  body("address")
    .exists()
    .notEmpty()
    .withMessage("Address is required")
    .isString()
    .isLength({ min: 4, max: 100 })
    .trim(),
];

export const loginUserSchema = [
  body("userName")
    .exists()
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ min: 5, max: 20 })
    .matches(/^[a-zA-Z0-9]+$/, "g")
    .trim(),
  body("password")
    .exists()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8, max: 20 })
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "g"
    )
    .trim(),
  body("rememberMe").optional().isBoolean().toBoolean(),
];
