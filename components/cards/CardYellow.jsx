import React from 'react'

export default function CardYellow({title, description, img}) {
  return (
    <div className='max-w-sm shadow-lg p-5 bg-yellow-400 rounded grid grid-cols-2'>
        <img className='h-36 grid justify-items-center' src={`img/${img}`} alt="" />
        <div className="pl-3">
          <p className='underline text-2xl font-black gap-'>{title}</p>
          <p>
              {description}
          </p>
        </div>
    </div>
  )
}
