import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
export default function Header() {
  return (
    <div className="w-full h-24 rounded-tr-xl bg-[#ffb5a7] overflow-hidden flex justify-between items-center">
      <div>
        <img
          src="../images/Header.png"
          className="w-80 h-32 object-cover -translate-x-4 transform -scale-x-100"
        />
      </div>
      <div className="mr-10 text-white text-2xl font-bold flex flex-col">
        <p>Your Fvaourite tunes</p>
        <span className="flex items-center ml-12 text-xl">
          <p>All</p>
          <span className="px-4 text-yellow-300">
            <FaSun />
          </span>
          <p>and all</p>
          <span className="px-4 text-black">
          <FaMoon />
          </span>
          
        </span>
      </div>
    </div>
  );
}
