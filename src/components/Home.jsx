import React from 'react'

function Home() {
  return (
    <div className='min-h-screen flex items-center flex-col justify-center bg-gradient-to-r from-[#0b070e] to-[#000c1f] text-white'>
     <div className='max-w-40 text-center mb-8 overflow-hidden rounded-full shadow-lg'>
        <img src="https://avatars.githubusercontent.com/u/124702114?v=4" alt="my_pfp" />
     </div>
     <div>
        <h1 className='font-bold font-mono text-3xl'>Hi ! I am Nilesh Pawara</h1>
     </div>
     <div>
        <p>Currently Pursuing MCA. </p>
     </div>
    </div>
  )
}

export default Home
