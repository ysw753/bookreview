import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { updateReviewCount } from "../api/firebase";
const ReviewDetail = () => {
  const {
    state: {
      review: { image, title, contents, createdby },
      review,
    },
  } = useLocation();
  const [good, setGood] = useState(false);
  const clickHandler = () => {
    setGood((prev) => {
      return !prev;
    });
    let num = good ? -1 : 1;
    updateReviewCount(review, num);
  };

  return (
    <section className="p-10 flex flex-col items-center	">
      <div className=" flex flex-col md:flex-row justify-between">
        <img className="  " src={image} alt={title} />
        <div className="w-full basis-5/12 flex flex-col px-4">
          <p className="text-xl font-bold py-2 border-b border-gray-400">
            {title}
          </p>
          <div className="flex items-center justify-between">
            <p className=" text-md font-bold py-2 text-end">
              작성자 : {createdby}
            </p>
            <p
              className="cursor-pointer transition-all hover:scale-105"
              onClick={clickHandler}
            >
              {good ? (
                <AiFillHeart color="red" size={20} />
              ) : (
                <AiOutlineHeart color="red" size={20} />
              )}
            </p>
          </div>
        </div>
      </div>
      <p className="p-10   text-xl break-words break-all ">{contents}</p>
    </section>
  );
};

export default ReviewDetail;
