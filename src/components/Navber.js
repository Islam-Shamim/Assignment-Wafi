import Image from 'next/image'
import React from 'react'
import { CiBellOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import profile from '@/photo/shamim.jpg'
export default function Navber() {
  return (
    <div className="navbar bg-slate-200">
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl">Calender</a>
      </div>
      <div className="flex-none space-x-4">
        <div>
          <button className='px-4 py-2 flex justify-center items-center space-x-2 bg-red-400 rounded'><FiPlus /><span>Add Booking</span></button>
        </div>
        <div className='text-3xl' >
          <CiBellOn />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <BiMessageDetail className='text-3xl' />
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image
                alt="Tailwind CSS Navbar component"
                src={profile} width={200} height={400} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
        <div className='text-xl'>
        <IoIosArrowDown />
        </div>
      </div>
    </div>
  )
}
