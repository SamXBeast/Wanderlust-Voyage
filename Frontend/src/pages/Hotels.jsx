import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchHotels from '../components/SearchHotels';


const Hotels = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  
  return (
    <div className='overflow-hidden'>
        <Navbar />
        <Header type="list" />
        <div className="flex justify-center mt-5">
  <div className="w-full max-w-4xl flex gap-5">
    <div className="flex-1 bg-yellow-400 p-2.5 rounded-lg sticky top-2.5 h-max">
      <h1 className="text-lg text-gray-700 mb-2.5">Search</h1>
      <div className="flex flex-col gap-1.5 mb-2.5">
        <label className="text-sm">Destination</label>
        <input placeholder={destination} type="text" className="h-7 border-none p-1.5" />
      </div>
      <div className="flex flex-col gap-1.5 mb-2.5">
        <label className="text-sm">Check-in Date</label>
        <span onClick={() => setOpenDate(!openDate)} className="h-7 p-1.5 bg-white flex items-center cursor-pointer">
          {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
        </span>
        {openDate && (
          <DateRange
            onChange={(item) => setDate([item.selection])}
            minDate={new Date()}
            ranges={date}
          />
        )}
      </div>
      <div className="flex flex-col gap-1.5 mb-2.5">
        <label className="text-sm">Options</label>
        <div className="p-2.5">
          <div className="flex justify-between mb-2.5 text-gray-700 text-sm">
            <span>Min price <small>per night</small></span>
            <input type="number" className="w-12" />
          </div>
          <div className="flex justify-between mb-2.5 text-gray-700 text-sm">
            <span>Max price <small>per night</small></span>
            <input type="number" className="w-12" />
          </div>
          <div className="flex justify-between mb-2.5 text-gray-700 text-sm">
            <span>Adult</span>
            <input type="number" min={1} className="w-12" placeholder={options.adult} />
          </div>
          <div className="flex justify-between mb-2.5 text-gray-700 text-sm">
            <span>Children</span>
            <input type="number" min={0} className="w-12" placeholder={options.children} />
          </div>
          <div className="flex justify-between mb-2.5 text-gray-700 text-sm">
            <span>Room</span>
            <input type="number" min={1} className="w-12" placeholder={options.room} />
          </div>
        </div>
      </div>
      <button className="p-2.5 bg-blue-700 text-white w-full font-medium cursor-pointer">Search</button>
    </div>
    <div className="flex-3">
      {/* Placeholders for SearchItem components */}
      <SearchHotels />
      <SearchHotels />
      <SearchHotels />
      <SearchHotels/>
      {/* Add more SearchItem components as needed */}
    </div>
  </div>
</div>
</div>
  )
}

export default Hotels