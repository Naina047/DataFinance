import React from 'react'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src='' alt='/' className='bg-gray-500 mx-4 w-[500px' />
            <div className='flex flex-col justify-center'>
                <p className='text-xl text-[#00df9a]'>Data analytic Dashboard</p>
                <h1 className='font-bold md:4xl sm:text-3xl text-xl '>MANAGE DATA ANALYTICS CENTRALLY</h1>
                <p className='py-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, error maiores vitae deserunt sint id consequatur quae, laudantium optio vero dolore? Magni ea omnis explicabo illum neque eum fugiat quas?</p>
            
                <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-black'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics