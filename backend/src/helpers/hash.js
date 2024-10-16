import bcrypt from "bcrypt";

export const hashString = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
