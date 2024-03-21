import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import index from "./router/index.js";
const app = express();
const PORT = process.env.PORT || 5000;
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const URL =
  "mongodb+srv://OrganicWeb:u7KuRPObXbYnx2o0@cluster.faquuis.mongodb.net/OrganicWebsite?retryWrites=true&w=majority";
mongoose
  .connect(URL)
  .then(() => {
    console.log("connected to DB");
    app.listen(PORT, () => {
      console.log(`Sever running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("err", error);
  });

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.use("/", index);
