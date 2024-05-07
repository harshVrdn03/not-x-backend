import express from "express";
import login from "../controllers/login.controller.js";
import userVerification from "../middlewares/userVerification.js";
import register from "../controllers/register.controller.js";
import suggestion from "../controllers/suggestion.controller.js";
const authRoute = express.Router();
authRoute.post("/login", login);
authRoute.post("/register", register);
authRoute.post("/verification", userVerification);
authRoute.get("/suggestions", suggestion);
export default authRoute;
