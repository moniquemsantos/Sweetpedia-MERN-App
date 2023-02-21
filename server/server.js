import express from "express";
import cors from "cors";
import router from "./routes/test.js";
import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import passport from "passport";
import recipeRoutes from "./routes/recipeRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import cloudinaryConfig from "./config/cloudinaryConfig.js";
import { jwtStrategy } from "./config/passportConfig.js";

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

const port = process.env.PORT || 5000;

const mongoDBConnection = async () => {
  mongoose.set("strictQuery", false);
  try {
    await mongoose.connect(process.env.DB);
    console.log("Connection to Mongo DB established on port: " + port);
  } catch (error) {
    console.log("error connecting to MONGODB", error);
  }
};

const loadRoutes = () => {
  app.use("/api", router);
  app.use("/api/recipes", recipeRoutes);
  app.use("/api/users", usersRoutes);
};

const startServer = () => {
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
};

const addMiddlewares = () => {
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(cors());
  cloudinaryConfig();
};

app.use(passport.initialize());
passport.use(jwtStrategy);

(async function controller() {
  await mongoDBConnection();
  addMiddlewares();
  loadRoutes();
  startServer();
})();
