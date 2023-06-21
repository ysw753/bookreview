import React from "react";

const HallOfFame = () => {
  return (
    <section className="h-96 bg-pink-900 relative">
      <div className="w-full h-full bg-cover bg-banner opacity-80" />

      <div className="absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl">
        <h2 className="text-6xl mb-10">명예의 전당</h2>
        <p className="text-2xl">책이름: 생각의 힘</p>
      </div>
    </section>
  );
};

export default HallOfFame;
