import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-40 py-2'>
        <div>
            <h1 className='text-4xl px-6 font-semibold hover:pt-2 cursor-pointer'> Pr<span className='text-orange-300'>ox</span>y</h1>
        </div>
        <div className='flex justify-center items-center gap-16'>
            <h1 className='text-lg font-semibold hover:text-blue-800 hover:pt-2 cursor-pointer'>Today Score</h1>
            <h1 className='text-lg font-semibold hover:text-blue-800 hover:pt-2 cursor-pointer'>Daily Score</h1>
            <img src='/img/7041.jpg' alt='img' className='w-16 h-16 rounded-full cursor-pointer'/>
        </div>
      
    </div>
  )
}

export default Navbar
