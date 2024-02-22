import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema({
  title: String,
  description: String,
  isCompleted: Boolean,
});

export const Todo = mongoose.model("Todo", todoSchema);

async function connectToMongo() {
  try {
    await mongoose.connect(
      "mongodb+srv://dipakhade214:TwF7ZImbgD5J5zkt@cluster0.saoibto.mongodb.net/portfolioconnect",
    );
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
}

export default connectToMongo;
