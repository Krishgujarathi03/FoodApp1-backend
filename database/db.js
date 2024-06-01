import mongoose from "mongoose";

const connectToDb = async () => {
  await mongoose
    .connect(
      "mongodb+srv://Krish:Krish03*@cluster0.hsd5l4g.mongodb.net/foodApp"
    )
    .then(() => console.log("Database connected successfully"));
};

export default connectToDb;
