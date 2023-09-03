import React from "react";

const ReviewItem = ({ review }) => {
  return (
    <div className="review-item">
      <h6>Username: {review.username}</h6>
      <p>Rating: {review.rating}</p>
      <p>Review: {review.reviewText}</p>
    </div>
  );
};

export default ReviewItem;
