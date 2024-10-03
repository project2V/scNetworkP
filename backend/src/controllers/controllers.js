import { sequelize } from "../db/connection.js";
import { userModel } from "../models/user.models.js";
export const ctrl = {};

ctrl.regUser = async (req, res) => {
  const { name, surname, dni, phoneNumber, email, password, address } =
    req.params;
  try {
    const newUser = new userModel({
      name,
      surname,
      dni,
      phoneNumber,
      email,
      password,
      address,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error, "Error registering user");
  }
};

ctrl.loginUser = async (req, res) => {
  const { email, password } = req.params;
  try {
    const user = await userModel.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: "User not found" });
    if (!user.validatePassword(password))
      return res.status(401).json({ message: "Incorrect password" });
  } catch (error) {
    console.log("Error getting user");
  }
};
