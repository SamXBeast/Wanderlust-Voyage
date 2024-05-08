import React from 'react'

const Mail = () => {
  return (
    <div className="w-full mt-12 bg-blue-800 text-white flex flex-col items-center gap-5 p-12">
      <h1 className="font-bold text-2xl">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input className='w-[300px] h-8 p-5 mr-2.5 rounded-md' type="text" placeholder="Your Email" />
        <button className='px-4 py-2 h-12 bg-blue-700 text-white font-medium rounded-md cursor-pointer hover:bg-blue-500'>Subscribe</button>
      </div>
    </div>
  )
}

export default Mail