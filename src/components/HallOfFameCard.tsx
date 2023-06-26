import React from "react";

const HallOfFameCard = ({ review: { image, title, createdby } }: any) => {
  return (
    <li className="rounded-lg shadow-md flex justify-center ">
      <div className="p-5">
        <img src={image} alt={title} />
      </div>
      <div className="mt-2 px-2 text-lg ">
        <h3 className="truncate m-5">{title}</h3>
        <p>작성자 : {createdby}</p>
      </div>
    </li>
  );
};

export default HallOfFameCard;
