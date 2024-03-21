import { UserModel } from "../models/userModel.js";
export const getUser = async (req, res) => {
  try {
    const user = await UserModel.find();
    console.log("user", user);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const createUser = (req, res) => {
  res.send("create User");
};
