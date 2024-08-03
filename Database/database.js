import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

export const connectDB = async () => {
   const { connection } = await mongoose.connect(process.env.MONGO_URI);
  // const { connection } = await mongoose.connect("mongodb://localhost:27017/razor");
  console.log(`Mongodb is connected with ${connection.host}`);
};