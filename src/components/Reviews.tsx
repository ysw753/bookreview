import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getReviews } from "../api/firebase";
import ReviewCard from "./ReviewCard";
import { ReviewData } from "../pages/NewBookReview";

const Reviews = () => {
  const { isLoading, error, data: reviews } = useQuery(["reviews"], getReviews);

  return (
    <>
      {isLoading && <p>Loading...</p>}

      <ul className="grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-4 p-4">
        {reviews &&
          reviews.map((review: ReviewData) => (
            <ReviewCard key={review.id} review={review} />
          ))}
      </ul>
    </>
  );
};

export default Reviews;
