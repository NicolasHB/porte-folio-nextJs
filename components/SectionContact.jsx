import React from 'react'
import { FaTwitterSquare, FaLinkedin, FaEnvelope  } from "react-icons/fa";

export default function SectionContact() {
  return (
    <div className='text-white p-5 '>
        <h2 className='text-4xl text-yellow-400 underline'>Contact</h2>
        <div className="grid grid-cols-3 gap-3 pt-6">
            <div className= "hover:border border-yellow-400 rounded text-center ">
                <p>Twitter</p>
                <i className='grid justify-items-center'><FaTwitterSquare/></i>
                <p>@nicodev</p>
            </div>
            <div className="hover:border border-yellow-400 rounded text-center">
                <p>Email</p>
                <i className='grid justify-items-center'><FaEnvelope/></i>
                <p>nicodev@contact.com</p>
            </div>
            <div className="hover:border border-yellow-400 rounded text-center">
                <p>linkedin</p>
                <i className='grid justify-items-center '><FaLinkedin/></i>
                <p>nicodev</p>
            </div>
        </div>
    </div>
  )
}
