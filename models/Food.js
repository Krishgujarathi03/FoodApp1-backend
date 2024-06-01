import mongoose, { Schema, model } from "mongoose";

const FoodSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
});

const Food = mongoose.models.food || model("food", FoodSchema);
export default Food;
