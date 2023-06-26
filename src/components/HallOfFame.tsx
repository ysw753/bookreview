import React, { useEffect, useState } from "react";
import { getReviews } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import { ReviewData } from "../pages/NewBookReview";
import HallOfFameCard from "./HallOfFameCard";

const HallOfFame = () => {
  const [fame, setFame] = useState<ReviewData[]>([]);
  const { isLoading, error, data: reviews } = useQuery(["reviews"], getReviews);

  useEffect(() => {
    if (!isLoading) {
      let countOfReviews = 0;
      reviews?.forEach((el) => {
        if (el.count >= countOfReviews) {
          countOfReviews = el.count;
        }
      });
      let kingOfReviews = reviews?.filter((el) => el.count === countOfReviews);
      kingOfReviews = kingOfReviews ? kingOfReviews : [];
      setFame(kingOfReviews);
    }
  }, [isLoading, reviews]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="flex  justify-center bg-pink-900 p-10 	">
      <div className="bg-cover bg-banner opacity-80">
        <div className=" text-center text-gray-50">
          <ul>
            <h2 className="text-6xl mb-10">명예의 전당</h2>
            {fame.map((review) => (
              <HallOfFameCard review={review} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HallOfFame;
