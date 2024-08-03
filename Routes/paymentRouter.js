import express from "express";
import {
  getKey,
  checkout,
  paymentVerification,
  
} from "../Controllers/paymentController.js";

const router = express.Router();

router.route("/getkey").get(getKey);
router.route("/checkout").post(checkout);
router.route("/paymentverification").post( paymentVerification);

export default router;