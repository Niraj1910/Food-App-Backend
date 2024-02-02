import express from "express";
import db from "./db.js";
import FoodRoute from "./Routes/FoodRoute.js";
import cors from "cors";

const PORT = 5000;
const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware for handling JSON and form data
app.use(express.json());

app.get("/", (req, res) => {
  res.send("backend !!!");
});

app.use("/api/v1", FoodRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
