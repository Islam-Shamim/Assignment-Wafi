import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";

export default function CarNav() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <h2 className='text-xl font-semibold'>Add Car Booking</h2>
            </div>
            <div className="flex-none text-2xl space-x-4">
                <button className="">
                <BsThreeDots />
                </button>
                <button><IoIosClose /></button>
            </div>
        </div>
    )
}
