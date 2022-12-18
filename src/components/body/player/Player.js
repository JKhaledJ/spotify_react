import React from "react";
import { FaPlayCircle, FaAngleLeft, FaAngleRight, FaHeart, FaEllipsisH, FaRandom, FaRetweet, FaVolumeDown, FaStepBackward, FaStepForward} from 'react-icons/fa'

export default function Player() {
  return (
    <div className="absolute h-16 w-[calc(100%-276px)] bottom-2 rounded-br-xl right-3 bg-white shadow-custom flex items-center">
      <div className="flex items-center px-10 gap-3">
        <span className="bg-gray-300 w-12 h-12 rounded-md"></span>
        <h1 className="font-bold text-[#39383D]">Nothings playing</h1>
      </div>
      <div className="flex items-center gap-2 text-gray-300">
        <span className="cursor-pointer"><FaStepBackward/></span>
        <span className="text-5xl text-[#564fd8] cursor-pointer"><FaPlayCircle/></span>
        <span className="cursor-pointer"><FaStepForward/></span>
      </div>
      <span className="h-1 bg-[#CECEDC] rounded-sm w-1/2 mx-8"></span>
      <div className="flex text-gray-300 gap-8">
         <FaHeart/>
         <FaRandom/>
         <FaRetweet/>
         <FaVolumeDown/>
      </div>
    </div>
  );
}
