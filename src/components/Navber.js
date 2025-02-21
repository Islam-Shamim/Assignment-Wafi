import Image from 'next/image'
import React from 'react'
import { CiBellOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { FaRegCalendarDays } from "react-icons/fa6";
import { BiMessageDetail } from "react-icons/bi";
import profile from '@/photo/shamim.jpg'
import Link from 'next/link';
export default function Navber() {
  return (
    <div className='px-4 flex navbar bg-slate-200'>
      <div className='flex justify-center items-center space-x-2 mr-4'>
        <FaRegCalendarDays className='text-blue-600 text-xl' />
        <h2>Car</h2>
        <h2>Booking</h2>
      </div>
      <div className="navbar">
        <div className="flex-1">
          <h2 className='text-3xl font-semibold'>Calender</h2>
        </div>
        <div className='flex-none gap-2'>
          <div className="flex justify-center items-center space-x-4">
            <div>
              <Link href='/booking' className='px-4 py-2 flex  space-x-2 bg-blue-500 text-white rounded'><FiPlus /><span>Add Booking</span></Link>
            </div>
            <div className='text-3xl' >
              <button className='hover:bg-slate-400 rounded-full p-2'><CiBellOn /></button>
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
                    src={profile} width={200} height={200} />
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
              <button><IoIosArrowDown /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
