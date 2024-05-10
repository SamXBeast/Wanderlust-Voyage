import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

const Flights = () => {
  return (
    <div>
        <Navbar/>
        <Header type="list" />
        <div className=' bg-slate-100 text-black'>
            <h1 className='text-2xl font-roboto text-center font-semibold p-4'>Compare and book flights with ease</h1>
        </div>
    </div>
  )
}

export default Flights