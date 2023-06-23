import React from "react";
import { useLocation } from "react-router-dom";

const ReviewDetail = () => {
  const {
    state: {
      review: { id, image, title, contents, createdby },
    },
  } = useLocation();
  return (
    <section className="p-10">
      <div className="flex flex-col md:flex-row justify-center">
        <img className="w-1/3  " src={image} alt={title} />
        <div className="w-full basis-5/12 flex flex-col p-4">
          <p className="text-2xl font-bold py-2 border-b border-gray-400">
            작성자 : {createdby}
          </p>
          <h2 className="text-3xl font-bold py-2 ">{title}</h2>
        </div>
      </div>
      <p className="p-10 text-xl break-words break-all ">
        {contents}
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </p>
    </section>
  );
};

export default ReviewDetail;
