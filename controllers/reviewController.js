import Review from "../models/review.js";

// ... Existing code for addReview and getProductReviews functions

// Add a new review
export const addReview = async (req, res) => {
  try {
    const { productId, username, rating, reviewText } = req.body;
    const newReview = new Review({ productId, username, rating, reviewText });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get reviews for a product
export const getProductReviews = async (req, res) => {
  try {
    const { productId } = req.params;
    const reviews = await Review.find({ productId });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
