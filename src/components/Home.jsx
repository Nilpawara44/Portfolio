import React from 'react'
import About from './About'


function Home() {
  return (
    <div className='min-h-screen flex items-center flex-col justify-center bg-gradient-to-r from-[#0b070e] to-[#000c1f] text-white'>
     <div className='max-w-40 text-center mb-8 overflow-hidden rounded-full shadow-lg'>
        <img src="https://avatars.githubusercontent.com/u/124702114?v=4" alt="my_pfp" />
     </div>
     <div>
        <h1 className='font-bold font-mono text-center text-3xl'>Hi ! I am Nilesh Pawara</h1>
     </div>
     <div>
        <p className='font-bolt font-mono'>MCA Student... </p>
     </div>
     <div>
      <button className='bg-transparent border rounded-md py-2 px-5 mt-4 border-amber-800 font-serif  shadow-sky-600 shadow-sm hover:cursor-pointer hover:bg-gray-50 hover:text-black transition-all'>Know More...</button>
     </div>
    
    </div>
  )
}

export default Home
