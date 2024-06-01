import express from "express";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// Image storage engine

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, callback) => {
    return callback(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Route 1
foodRouter.post("/add", upload.single("image"), addFood);
// Route 2
foodRouter.get("/list", listFood);
//Route 3
foodRouter.post("/remove", removeFood);
export default foodRouter;
