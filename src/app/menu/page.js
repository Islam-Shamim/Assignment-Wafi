import Link from 'next/link';
import React from 'react'
import { MdCalendarMonth } from "react-icons/md";
import { MdAddCard } from "react-icons/md";
import { PiShareNetwork } from "react-icons/pi";

export default function Menu() {
    return (
        <ul className="menu rounded mr-4">
            <li><Link href='/' className='hover:bg-blue-500 flex'><MdCalendarMonth />Calender</Link></li>
            <li><Link href='/booking' className='hover:bg-blue-500 flex'><MdAddCard />Add Booking</Link></li>
            <li><a className='hover:bg-blue-500 flex'><PiShareNetwork />Workflow</a></li>
        </ul>
    )
}
