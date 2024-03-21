import express from "express";
import {getIndex} from "../controller/index.js";
import {getUser} from "../controller/user.js";
import { createUser } from "../controller/user.js";
const router = express.Router();
router.get('/',getIndex);
router.get('/user',getUser)
router.post('/user',createUser)
export default router;
