import React from 'react'

export default function Info() {
    return (
        <div className='my-4'>
            <h1 className='text-blue-400'>Basic Information</h1>
            <form>
                <div className='flex space-x-16'>
                    <div className='block'>
                        <label>
                            <span>Subject</span>
                        </label><br />
                        <input type="text" placeholder="Write a short note" className="input input-bordered" required />
                    </div>
                    <div className='block'>
                        <label>
                            <span>Select Car</span>
                        </label><br />
                        <select className="select select-bordered">
                            <option disabled selected>Select One</option>
                            <option>Toyota</option>
                            <option>BMW</option>
                            <option>Jaguar</option>
                            <option>Ferrari</option>
                            <option>Audi</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    )
}
