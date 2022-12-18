import React from 'react'
import SideBarItem from './SideBarItem'
import {FaHeadphonesAlt, FaSearch, FaHeart, FaPlayCircle, FaChartBar} from 'react-icons/fa'
import {FcBusinessman} from 'react-icons/fc'
import './slidebar.css';
export default function sidebar() {
  return (
    <div className="w-1/6 bg-[#564fd8] rounded-tl-xl rounded-bl-xl max-h-screen">
      <div className='flex flex-col items-center gap-y-16 h-full pb-8'>
        <div className='flex flex-col justify-between items-center mt-11'>
          <FcBusinessman className='rounded-full bg-orange-200 w-16 h-16'/>
          <br/>
          <p className='text-white'>Bob Smith</p>
        </div>
        <div className='w-full overflow-y-scroll no-scrollbar'>
          <SideBarItem text = "Discover">
            <FaHeadphonesAlt />
          </SideBarItem>
          <SideBarItem text = "Search">
            <FaSearch/>
          </SideBarItem>
          <SideBarItem text = "Favourites">
            <FaHeart />
          </SideBarItem>
          <SideBarItem text = "Playlists">
            <FaPlayCircle/>
          </SideBarItem>
          <SideBarItem text = "Charts">
            <FaChartBar />
          </SideBarItem>
        </div>
      </div>
    </div>
  )
}
