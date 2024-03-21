import mongoose from "mongoose";
const schemaUser = new mongoose.Schema({
  Name: String,
  UserName: String,
  PassWord: String,
  Phone: Number,
  Address: String,
});
export const UserModel = mongoose.model("User", schemaUser);
