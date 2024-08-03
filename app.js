import express from 'express';
import { config } from 'dotenv';
import paymentRoute from './Routes/paymentRouter.js';
import Razorpay from "razorpay";
import cors from "cors";
 import {connectDB} from './Database/database.js'

 connectDB();
// Load environment variables from config.env
config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Razorpay instance setup
export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

// Routes
app.use("/api", paymentRoute);

// Example route to verify setup
app.get('/', (req, res) => {
  res.send('Server is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;