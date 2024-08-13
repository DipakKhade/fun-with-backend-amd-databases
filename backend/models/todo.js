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
      process.env.DATABASE_URL,
    );
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
}

export default connectToMongo;
