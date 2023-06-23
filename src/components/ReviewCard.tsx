import React from "react";
import { useNavigate } from "react-router-dom";

const ReviewCard = ({
  review,
  review: { id, image, title, contents, createdby },
}: any) => {
  const navigate = useNavigate();

  return (
    <li
      onClick={() => {
        navigate(`/review/${id}`, { state: { review } });
      }}
      className="rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105"
    >
      <div className="flex justify-space items-top p-5">
        <img className="w-1/2  " src={image} alt={title} />
        <p className="m-5 truncate">책 제목을 입력해주세요</p>
      </div>
      <div className="mt-2 px-2 text-lg flex justify-between items-center">
        <h3 className="truncate">{title}</h3>
        <p>{createdby}</p>
      </div>
      <div className="mt-2 px-2 text-lg flex justify-between items-center">
        <p className="truncate">{contents}</p>
      </div>
    </li>
  );
};

export default ReviewCard;
