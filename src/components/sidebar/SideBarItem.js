import React from 'react'

const SideBarItem = (props)=> {
  return (
    <div className='pl-10 py-6 w-full hover:bg-gradient-to-r from-[#7974DD] cursor-pointer text-gray-400 hover:text-white font-semibold'>
        <a className='flex justify-start gap-2 items-center' href="/">
            <span>{props.children}</span>
            <span className='text-lg pl-3'>{props.text}</span>
        </a>
    </div>
  )
}
export default SideBarItem;