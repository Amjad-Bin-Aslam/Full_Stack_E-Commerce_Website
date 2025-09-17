import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {

  const [visible , setVisible] = useState(false);

  return (

    <div className="flex items-center justify-between py-5 font-medium">

      {/* Logo */}
      <img className="w-36" src={assets.logo} alt="Logo" />

      {/* Navigation Links */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
                     
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${isActive ? "active" : ""}`
          }
        >
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink
          to="/collection"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${isActive ? "active" : ""}`
          }
        >
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${isActive ? "active" : ""}`
          }
        >
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${isActive ? "active" : ""}`
          }
        >
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

      </ul>

      <div className='flex items-center gap-6'>
          <img className='w-5 cursor-pointer' src={assets.search_icon} alt="" />

          <div className='group relative'>
            <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />

            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile </p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>

          </div>
            <Link className='relative' to='/cart'> 
               <img className='w-5 min-w-5' src={assets.cart_icon} alt="" />
               <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
            </Link>
            <img className='w-5 cursor-pointer sm:hidden' src={assets.menu_icon} alt="" 
            onClick={()=>setVisible(true)}
            />
      </div>

    </div>
  )
}

export default Navbar
