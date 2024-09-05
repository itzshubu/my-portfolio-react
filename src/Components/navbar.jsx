import React from 'react'
import { useState } from 'react'
import mobilenav from './mobilenav'
import Resume from "../assets/portfolio.png"

const navbar = () => {
  return (
    <>
    <nav className='bg-[#0c2860b3] max-w-screen-xl flex p-5 justify-between text-white items-center sticky top-0'>
         <div className=''>
            <img src={Resume} className='w-12' alt="fortfolio logo"  />
         </div>
         <ul className='flex list-none no-underline gap-8'>
            <li><a href="" className='menu-item'>Home</a></li>
            <li><a href="" className='menu-item'>About Me</a></li>
            <li><a href="" className='menu-item'>Skills</a></li>
            <li><a href="" className='menu-item'>Projects</a></li>
            <li><a href="" className='menu-item'>Contect Me</a></li>
         </ul>
    </nav>

    </>
  )
}

export default navbar