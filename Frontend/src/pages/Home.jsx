import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPlane, faEarthAsia, faCar, faMartiniGlassEmpty, faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import Features from '../components/Features';
import Property from '../components/Property';
import FeaturedProperty from '../components/FeaturedProperty';
import India from '../components/India';
import Mail from '../components/Mail';
import Footer from '../components/Footer';


const Home = () => {
  
  return (
    
    <>
    <Navbar/>
    <Header/>
    <div className='mt-12 flex flex-col items-center gap-8'>
      <Features />
      <h1 className='w-[1024px] text-[20px] font-bold'>Explore India</h1>
      <India />      
      <h1 className='w-[1024px] text-[20px] font-bold'>Browse by Property type</h1>
      <Property />
      <h1 className='w-[1024px] text-[20px] font-bold'>Home Guests Love</h1>
      <FeaturedProperty />
      <Mail />
      <Footer />
    </div>           
    
   
    </>
  )
}

export default Home