import React from "react";
import { useNavigate } from "react-router-dom";
import { ReviewData } from "../pages/NewBookReview";

type Props = {
  review: ReviewData;
};
const ReviewCard = ({
  review,
  review: { id, image, title, contents, createdby },
}: Props) => {
  const navigate = useNavigate();

  return (
    <li
      onClick={() => {
        navigate(`/review/${id}`, { state: { review } });
      }}
      className="rounded-lg shadow- overflow-hidden cursor-pointer transition-all hover:scale-105"
    >
      <div className="flex justify-center items-top p-5">
        <img className="w-1/2  " src={image} alt={title} />
      </div>
      <div className="mt-2 px-2 text-lg flex justify-between items-center">
        <h3 className="truncate">{title}</h3>
      </div>
      <div className="mt-2 px-2 text-lg flex justify-between items-center">
        <p className="truncate text-sm">{contents}</p>
      </div>
    </li>
  );
};

export default ReviewCard;
