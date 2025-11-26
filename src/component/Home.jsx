import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen flex items-center justify-center  gap-7 '>
      <h1 className='font-bold   text-7xl'>Welcome to Home Page</h1>
 
         <button className='text-center bg-blue-600 gap-2 w-30 h-10 rounded-lg text-lg font-bold text-amber-100'>Logout</button>
      
        <button className='text-center bg-red-600 gap-2 w-30 h-10 rounded-lg text-lg font-bold text-amber-100'>Clear</button>
      
      
    </div>
  )
}

export default Home
