import Link from 'next/link'
import React from 'react'
import { FaLinkedin } from "react-icons/fa";

export default function SectionAbout() {
  return (
    <div className='py-15 px-10'>
        <h2 className='font-black text-2xl pb-4 text-yellow-400'>Qui suis-je ?</h2>
        <a href="" className='fa-6x text-white' ><FaLinkedin/></a>
        <p className='pt-5 text-white'>Je m'appelle Nicolas, j'ai 28 ans et je suis en formation fullsteack</p>
        <a href='' className='text-yellow-400'>CV</a>
    </div>
  )
}
