import React from 'react'
import { GoClock } from "react-icons/go";

export default function Info() {
    return (
        <div className='my-4'>
            <h1 className='text-blue-400 text-xl font-semibold my-4'>Basic Information</h1>
            <form className='my-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text font-semibold">Subject</span>
                        </label>
                        <input type="text" placeholder="write a short note" className="input bg-slate-100 rounded-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Select Car</span>
                        </label>
                        <select className="select bg-slate-100 rounded-full">
                            <option value='toyota'>Toyota</option>
                            <option value='bmw'>BMW</option>
                            <option value='jaguar'>Jaguar</option>
                            <option value='ferrari'>Ferrari</option>
                            <option value='audi'>Audi</option>
                        </select>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text font-semibold">Booking Date</span>
                        </label>
                        <input type="date" placeholder="Enter a date" className="input bg-slate-100 rounded-full" required />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 my-4 ">
                    <div>
                        <label className="block text-sm font-semibold">Start Time</label>
                        <input type="text" className="w-full mt-1 p-2 bg-slate-100 rounded-full" placeholder='Pick date' />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold">End Time</label>
                        <input type="text" className="w-full mt-1 p-2 bg-slate-100 rounded-full" placeholder='Pick time' />
                    </div>
                </div>
                <hr />
                <h1 className='text-blue-400 text-xl font-semibold my-4'>Repeat Options</h1>
                <div className='space-y-4 my-4'>
                    <div className="form-control w-1/2 pr-2">
                        <label className="label">
                            <span className="label-text font-semibold">Repeat On</span>
                        </label>
                        <select className="select bg-slate-100 rounded-full">
                            <option value='weekly'>Weekly</option>
                            <option value='monthly'>Monthly</option>
                        </select>
                    </div>
                    <div className="form-control flex flex-row space-x-4 pl-2">
                        <div className='flex justify-center items-center space-x-2'>
                            <input type="checkbox" className="w-5 h-5 accent-blue-500" /><span className='mr-2'>S</span>
                        </div>
                        <div className='flex justify-center items-center space-x-2'>
                            <input type="checkbox" className="w-5 h-5 accent-blue-500" /><span className='mr-2'>S</span>
                        </div>
                        <div className='flex justify-center items-center space-x-2'>
                            <input type="checkbox" className="w-5 h-5 accent-blue-500" /><span className='mr-2'>M</span>
                        </div>
                        <div className='flex justify-center items-center space-x-2'>
                            <input type="checkbox" className="w-5 h-5 accent-blue-500" /><span className='mr-2'>T</span>
                        </div>
                        <div className='flex justify-center items-center space-x-2'>
                            <input type="checkbox" className="w-5 h-5 accent-blue-500" /><span className='mr-2'>W</span>
                        </div>
                        <div className='flex justify-center items-center space-x-2'>
                            <input type="checkbox" className="w-5 h-5 accent-blue-500" /><span className='mr-2'>T</span>
                        </div>
                        <div className='flex justify-center items-center space-x-2'>
                            <input type="checkbox" className="w-5 h-5 accent-blue-500" /><span className='mr-2'>F</span>
                        </div>


                    </div>
                    <div className="form-control w-1/2 pr-2">
                        <label className="label">
                            <span className="label-text font-semibold">End Date</span>
                        </label>
                        <input type="text" placeholder="Select a date" className="input bg-slate-100 rounded-full" required />
                    </div>
                </div>
                <hr />
                <div className="flex justify-between mt-6">
                    <button className="text-blue-600">Advanced</button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Save</button>
                </div>
            </form>

        </div>
    )
}
