import React from 'react'

const SearchHotels = () => {
  return (
    <div className="border border-gray-300 p-2 rounded-md flex justify-between gap-5 mb-5">
  <img
    src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
    alt=""
    className="w-48 h-48 object-cover"
  />
  <div className="flex flex-col gap-2 flex-2">
    <h1 className="text-lg text-blue-600">Tower Street Apartments</h1>
    <span className="text-xs">500m from center</span>
    <span className="text-xs bg-green-700 text-white p-1 w-max rounded-md">Free airport taxi</span>
    <span className="text-xs font-bold">
      Studio Apartment with Air conditioning
    </span>
    <span className="text-xs">
      Entire studio • 1 bathroom • 21m² 1 full bed
    </span>
    <span className="text-xs font-bold text-green-700">Free cancellation </span>
    <span className="text-xs text-green-700">
      You can cancel later, so lock in this great price today!
    </span>
  </div>
  <div className="flex-1 flex flex-col justify-between">
    <div className="flex justify-between">
      <span className="font-medium">Excellent</span>
      <button className="bg-blue-800 text-white py-1 px-1 font-bold rounded-md border-none">8.9</button>
    </div>
    <div className="text-right flex flex-col gap-1.5">
      <span className="text-2xl">Rs.27,000</span>
      <span className="text-xs text-gray-500">Includes taxes and fees</span>
      <button className="bg-blue-600 text-white font-bold py-2 px-1 border-none cursor-pointer rounded-md">
        See availability
      </button>
    </div>
  </div>
</div>
  )
}

export default SearchHotels