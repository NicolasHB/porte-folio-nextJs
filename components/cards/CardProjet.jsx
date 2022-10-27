import Image from 'next/image'
import React from 'react'

export default function CardProjet({projet}) {
  console.log(projet)
  const { title, description, roles, skills, featuredImage } = projet.fields
  console.log(featuredImage)
  return (
    <div className='max-w-sm shadow-lg p-5 bg-white hover:bg-yellow-400 rounded grid grid-cols-2'>
         <Image className='h-36 grid justify-items-center' src={featuredImage.fields.file.url} alt="" />
         <div className="pl-3">
          <p className='underline text-2xl font-black gap-'>{title}</p>
           <div className="flex gap-2">
             <p className='rounded border'>{skills} </p>
             {/* <p className='rounded border'> {skill2}</p> */}
           </div>
           <p className='rounded border'> {roles}</p>
           <p>
               {/* {description} */}
           </p>
         </div>
    </div>
  )
}
