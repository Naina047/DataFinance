import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <div>
        <div className='max-w-[800px]  w-full h-screen mx-auto text-center flex flex-col justify-center text-white'>
            <p className='text-[#00df9a] font-bold p-2.5'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-6'>Grow with data.</h1>
            <div className='flex justify-center py-4 md:text-5xl sm:text-4xl text-xl font-bold'>
            <p className='mr-3'>
                fast,flexible,financing for 
            </p>
            <Typewriter 
            className='md:pl-4 pl-2'
            words={['BTB', 'BTC', 'SASS']} typeSpeed={120} deleteSpeed={130} loop/>

            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor yojocfiudyt sdb  nmkldw hjio</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero