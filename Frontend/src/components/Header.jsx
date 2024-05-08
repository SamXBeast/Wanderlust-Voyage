import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPlane, faEarthAsia, faCar, faMartiniGlassEmpty, faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";




const Header = ({type}) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };
  return (
    <div className="bg-blue-800 text-white flex justify-center relative">
    <div
      className={
        `w-full max-w-4xl my-5 p-2.5 ${type === "list" ? "mb-0" : "mb-24"}`
      }
    >
      <ul className="flex justify-between items-center gap-5 mr-8 ">
            <li><Link to="/"><button className='px-4 py-2 bg-blue-700 text-white rounded-lg opacity-90 hover:bg-blue-500'><FontAwesomeIcon icon={faBed}/><span className='ml-1'>Stays</span></button></Link></li>
            <li><Link to="/"><button className='px-4 py-2 bg-blue-700 text-white rounded-lg opacity-90 hover:bg-blue-500'><FontAwesomeIcon icon={faPlane}/><span className="ml-1">Flights</span></button></Link></li>
            <li><Link to="/"><button className='px-4 py-2 bg-blue-700 text-white rounded-lg opacity-90 hover:bg-blue-500'><FontAwesomeIcon icon={faEarthAsia}/><span className="ml-1">Flight+Hotels</span></button></Link></li>
            <li><Link to="/"><button className='px-4 py-2 bg-blue-700 text-white rounded-lg opacity-90 hover:bg-blue-500'><FontAwesomeIcon icon={faCar}/><span className="ml-1">Car Rentals</span></button></Link></li>
            <li><Link to="/"><button className='px-4 py-2 bg-blue-700 text-white rounded-lg opacity-90 hover:bg-blue-500'><FontAwesomeIcon icon={faMartiniGlassEmpty}/><span className="ml-1">Attractions</span></button></Link></li>
            <li><Link to="/"><button className='px-4 py-2 bg-blue-700 text-white rounded-lg opacity-90 hover:bg-blue-500'><FontAwesomeIcon icon={faTaxi}/><span className="ml-1">Airport Taxis</span></button></Link></li>
      </ul>
      {type !== "list" && (
        <>
          <h1 className="font-roboto font-semibold text-5xl ml-14 pt-10">
            Find Your Next Stay
          </h1>
          <p className="my-font-roboto font-normal text-2xl ml-14">
          Search low prices on hotels, homes and much more...
          </p>
          <div className="flex items-center justify-around py-2 bg-white border-4 border-yellow-400 rounded-md absolute bottom-[-12px] w-full max-w-4xl">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faBed} className="text-gray-400" />
              <input
                type="text"
                placeholder="Where are you going?"
                className="outline-none text-slate-700"
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCalendarDays} className="text-gray-400" />
              <span
                onClick={() => setOpenDate(!openDate)}
                className="text-gray-400 cursor-pointer"
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="absolute top-12 z-[11]"
                 
                />
              )}
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPerson} className="text-gray-400" />
              <span
                onClick={() => setOpenOptions(!openOptions)}
                className="text-gray-400 cursor-pointer"
              >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
              {openOptions && (
                <div className="absolute z-[11] top-[50px] p-4 bg-white text-gray-500 rounded-md shadow-[0_0_10px_-5px_rgba(0,0,0,0.4)]">
                  <div className="w-[200px] flex justify-between m-2.5">
                    <span className="text-black">Adult</span>
                    <div className="flex items-center gap-2">
                      <button
                        disabled={options.adult <= 1}
                        className="w-8 h-8 flex justify-center items-center bg-blue-600 text-white rounded disabled:opacity-50"
                        onClick={() => handleOption("adult", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.adult}
                      </span>
                      <button
                        className="w-8 h-8 flex justify-center items-center bg-blue-600 text-white rounded"
                        onClick={() => handleOption("adult", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="w-[200px] flex justify-between m-2.5">
                    <span className="text-black">Children</span>
                    <div className="flex items-center gap-2">
                      <button
                        disabled={options.children <= 0}
                        className="w-8 h-8 flex justify-center items-center bg-blue-600 text-white rounded disabled:opacity-50"
                        onClick={() => handleOption("children", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.children}
                      </span>
                      <button
                        className="w-8 h-8 flex justify-center items-center bg-blue-600 text-white rounded"
                        onClick={() => handleOption("children", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="w-[200px] flex justify-between m-2.5">
                    <span className="text-black">Room</span>
                    <div className="flex items-center gap-2">
                      <button
                        disabled={options.room <= 1}
                        className="w-8 h-8 flex justify-center items-center bg-blue-600 text-white rounded disabled:opacity-50"
                        onClick={() => handleOption("room", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.room}
                      </span>
                      <button
                        className="w-8 h-8 flex justify-center items-center bg-blue-600 text-white rounded"
                        onClick={() => handleOption("room", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded cursor-pointer" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  </div>
    


  )
}

export default Header