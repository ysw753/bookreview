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
      kingOfReviews = kingOfReviews ? [kingOfReviews[0]] : [];
      setFame(kingOfReviews);
    }
  }, [isLoading, reviews]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-pink-900 p-10 	">
      <div className="bg-cover bg-banner ">
        <div className="truncate text-center text-white">
          <ul className="">
            <h2 className="text-6xl mb-10">명예의 전당</h2>
            <div>
              {fame.map((review) => (
                <HallOfFameCard key={review.id} review={review} />
              ))}
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HallOfFame;
