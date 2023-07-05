import React from "react";
import { useNavigate } from "react-router-dom";
import { ReviewData } from "../pages/NewBookReview";

type Props = {
  review: ReviewData;
};
const HallOfFameCard = ({
  review: { id, image, title, createdby, contents },
  review,
}: Props) => {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        navigate(`/review/${id}`, { state: { review } });
      }}
      className="rounded-lg border-dashed border-2 border-yellow-300 shadow-md cursor-pointer flex flex-col justify-center"
    >
      <div className="flex justify-center p-5">
        <img src={image} alt={title} />
      </div>
      <div className="truncate mt-2 px-2 text-lg ">
        <h3 className="truncate m-5 ">{title}</h3>
        <p className="truncate text-sm ">작성자 : {createdby}</p>
        <p className="truncate mt-2 text-sm max-w-lg mx-auto">{contents}</p>
      </div>
    </li>
  );
};

export default HallOfFameCard;
