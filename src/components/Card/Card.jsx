import React from 'react'

function Card() {
  return (
    <div className='w-[350px] border h-[150px] p-5 rounded-[5px]'>
        <div className='flex flex-row justify-between'>
            <p>Titel</p>
            <div>
                icon
            </div>
        </div>
        <div className='mt-5'>
            <p className='text-2xl text-black font-bold'>price</p>
            <p className='mt-5'>description</p>
        </div>
    </div>
  )
}

export default Card
