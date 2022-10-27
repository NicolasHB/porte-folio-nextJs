import React from 'react'

export default function Card({title, description, img}) {
  return (
    <div className='max-w-sm shadow-lg p-5 bg-white rounded grid grid-cols-2'>
        <img className='h-36' src={`img/${img}`} alt="" />
        <div className="pl-3">
            <p className='underline text-2xl font-black'>{title}</p>
            <p>
                {description}
            </p>
        </div>
    </div>
  )
}
