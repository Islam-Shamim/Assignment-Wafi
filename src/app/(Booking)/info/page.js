import React from 'react'

export default function Info() {
    return (
        <div className='my-4'>
            <h1 className='text-blue-400 text-xl font-semibold my-4'>Basic Information</h1>
            <form>
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
                            <option value='Select One' disabled selected>Select One</option>
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
            </form>
        </div>
    )
}
