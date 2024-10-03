import { userModel } from "../models/user.models.js";
export const ctrl = {};

ctrl.regUser = async (req, res) => {
  const { name, surname, dni, phoneNumber, email, password, address } =
    req.body;
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
  const { name, dni, password } = req.body;
  try {
    const user = await userModel.findOne({ where: { dni } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.json({ message: "User logged in successfully" });
  } catch (error) {
    console.log("Error getting user");
  }
};
