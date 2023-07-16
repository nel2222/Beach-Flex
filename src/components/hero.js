import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import beachVid  from '../assets/beachVid.mp4';

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        <video className='w-full h-full object-cover' src={beachVid} 
        autoPlay
        loop
        muted />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute w-full top-0 flex flex-col text-center text-white p-4 h-full justify-center'>
        <h1 className='text-3xl'>First Class Travel</h1>
        <h2 className='py-4 text-2xl'>Top 1% Locations Worldwide</h2>
        <form className='flex justify-between items-center max-w-[200em] mx-auto w-6/12 border p-1 rounded-md text-black bg-gray-100/70'> 
        <div>
          <input className='bg-transparent w-[100px] sm:w-[200px] font-[Poppins] focus:outline-none' type="text" placeholder='Search Destination' />
        </div>
        <div>
          <button><AiOutlineSearch size={20} className="icon" /></button>
        </div>
        </form>
      </div>

    </div>
  )
}

export default Hero
