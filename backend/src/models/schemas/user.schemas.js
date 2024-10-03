import { body } from "express-validator";

export const registerUserSchema = [
  body("name")
    .exists()
    .notEmpty()
    .withMessage("Name is required")
    .isString()
    .isLength({ min: 3, max: 20 })
    .withMessage("Name must be between 3 and 20 characters")
    .matches(/^[a-zA-Z]+$/, "g")
    .trim(),
  body("surname")
    .exists()
    .notEmpty()
    .withMessage("Surname is required")
    .isString()
    .isLength({ min: 3, max: 20 })
    .withMessage("Surname must be between 3 and 20 characters")
    .matches(/^[a-zA-Z]+$/, "g")
    .trim(),
  body("dni")
    .exists()
    .notEmpty()
    .withMessage("DNI is required")
    .isNumeric()
    .isLength({ min: 8, max: 8 })
    .withMessage("Invalid DNI")
    .trim(),
  body("phoneNumber")
    .exists()
    .notEmpty()
    .withMessage("Phone number is required")
    .isNumeric()
    .isLength({ min: 10, max: 10 })
    .withMessage("Invalid phone number")
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
    .withMessage("Password must be between 8 and 30 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
    .withMessage(
      "Password must contain only alphanumeric characters, numbers, and special characters"
    )
    .trim(),
  body("address")
    .exists()
    .notEmpty()
    .withMessage("Address is required")
    .isString()
    .isLength({ min: 4, max: 100 })
    .withMessage("Address must be between 4 and 100 characters long")
    .trim(),
];

export const loginUserSchema = [
  body("name")
    .exists()
    .notEmpty()
    .withMessage("Name is required")
    .isString()
    .isLength({ min: 3, max: 20 })
    .withMessage("Name must be between 3 and 20 characters")
    .matches(/^[a-zA-Z]+$/, "g")
    .trim(),
  body("dni")
    .exists()
    .notEmpty()
    .withMessage("DNI is required")
    .isNumeric()
    .isLength({ min: 8, max: 8 })
    .withMessage("Invalid DNI")
    .trim(),
  body("password")
    .exists()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "g"
    )
    .withMessage(
      "Password must contain only alphanumeric characters and numbers only"
    )
    .trim(),
  body("rememberMe").optional().isBoolean().toBoolean(),
];
