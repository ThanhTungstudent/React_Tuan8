import React from 'react'
import Card from '../Card/Card'

function Overview() {
  return (
    <div className='w-full p-5 space-y-5' >
        <div className='flex flex-row gap-2'>
            <img src="./Lab_05/Squares four 1.png" alt="" />
        <h1 className='text-2xl font-bold text-black'>Overview</h1>
        </div>
        <div className='grid grid-cols-3 gap-5'>
        <Card/>
        <Card/>
        <Card/>
        </div>
        
    </div>
  )
}

export default Overview
