import express from "express";
const router = express.Router();
import {
  addReview,
  getProductReviews,
} from "../controllers/reviewController.js";

router.post("/add", addReview);
router.get("/product/:productId", getProductReviews);

export default router;
