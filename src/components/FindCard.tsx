import React from "react";

const FindCard = ({ data, clickHandler }: any) => {
  const onClickHandler = () => {
    clickHandler(data);
  };
  return (
    <li
      className="rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105"
      onClick={onClickHandler}
    >
      <div className="flex justify-spacezz items-top p-5">
        <img
          src={
            data.thumbnail
              ? data.thumbnail
              : "http://via.placeholder.com/120X150"
          }
          alt={data.title}
        />
        <p className="m-5 truncate">{data.title}</p>
      </div>
    </li>
  );
};

export default FindCard;
