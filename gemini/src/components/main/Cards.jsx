import React from "react";
// import { assets } from "../../assets/assets";

const Cards = ({ text, img }) => {
  return (
    <div className="h-52 p-4 bg-zinc-200 rounded-xl relative shadow-lg cursor-pointer hover:bg-gray-400 exl:flex-none">
      <p className="text-lg  text-stone-600">{text}</p>
      <img
        className="w-9 p-1 absolute bg-white rounded-[20px] bottom-3 right-3 "
        src={img}
        alt={img}
      />
    </div>
  );
};
export default Cards;
