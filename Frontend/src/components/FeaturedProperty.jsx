import React from 'react'

const FeaturedProperty = () => {
  return (
    <div className="max-w-[1024px] rounded overflow-hidden shadow-lg flex gap-5 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex-1 flex flex-col gap-2.5 pb-2 items-center shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="w-full h-[250px] object-cover"
        />
        <span className="text-gray-800 font-bold">Aparthotel Stare Miasto</span>
        <span className="font-light">Madrid</span>
        <span className="font-medium">Starting from Rs.51,000</span>
        <div className="fpRating">
          <button className="bg-[#003580] text-white border-none rounded-md p-[3px] mr-2.5 font-bold">8.9</button>
          <span className="text-sm">Excellent</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2.5 pb-2 items-center shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="w-full h-[250px] object-cover"
        />
        <span className="text-gray-800 font-bold">Comfort Suites Airport</span>
        <span className="font-light">Austin</span>
        <span className="font-medium">Starting from Rs.78,000</span>
        <div className="fpRating">
          <button className="bg-[#003580] text-white border-none rounded-md p-[3px] mr-2.5 font-bold">9.3</button>
          <span className="text-sm">Exceptional</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2.5 pb-2 items-center shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o="
          alt=""
          className="w-full h-[250px] object-cover"
        />
        <span className="text-gray-800 font-bold">Four Seasons Hotel</span>
        <span className="font-light">Lisbon</span>
        <span className="font-medium">Starting from Rs.23,000</span>
        <div className="fpRating">
          <button className="bg-[#003580] text-white border-none rounded-md p-[3px] mr-2.5 font-bold">8.8</button>
          <span className="text-sm">Excellent</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2.5 pb-2 items-center shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o="
          alt=""
          className="w-full h-[250px] object-cover"
        />
        <span className="text-gray-800 font-bold">Hilton Garden Inn</span>
        <span className="font-light">Berlin</span>
        <span className="font-medium">Starting from Rs.31,000</span>
        <div className="fpRating">
          <button className="bg-[#003580] text-white border-none rounded-md p-[3px] mr-2.5 font-bold">8.9</button>
          <span className="text-sm">Excellent</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProperty