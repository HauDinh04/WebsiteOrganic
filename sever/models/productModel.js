import mongoose from "mongoose";
const schemaProduct = new mongoose.Schema({
  Name: String,
  Images: String,
  Price: Number,
    
});
export const ProductModel = mongoose.model("Product", schemaProduct);
