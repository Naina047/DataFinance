import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full p-16 text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
            <p className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</p>
            <p>Sign up to our newsletter and stay up to date.</p>
        
        </div>
        <div className='my-4'>
        <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='p-3 mx-2 flex w-full rounded-md' type='email' placeholder='Enter your email'/>
            <button className='bg-[#00df9a] w-[200px] rounded-md font- my-6 mx-auto py-3 text-black'>Notify Me</button>
            </div>
            <p>We care about protection of your data. Read out <span className='text-[#00df9a] underline '>privacy policy</span></p>
        
        </div>
        </div>
    </div>
  )
}

export default Newsletter