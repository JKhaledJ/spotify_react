import React from 'react'

export default function Section({title}) {
  return (
    <div>
        <div className="flex items-center justify-between">
          <h1 className="text-gray-300 font-bold uppercase">{title}</h1>
          <span className="w-10/12 bg-gray-200 h-0.5"></span>
        </div>
        <div className="h-64 mt-6">
        </div>
    </div>
  )
}
