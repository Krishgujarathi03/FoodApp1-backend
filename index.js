import express from "express";
import cors from "cors";
import connectToDb from "./database/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();
const port = 4000;

// Middlewares
app.use(express.json());
app.use(cors());

connectToDb();

// Api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

// mongodb+srv://Krish:Krish03*@cluster0.hsd5l4g.mongodb.net/?
