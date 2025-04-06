import React from 'react'

function Sidebar() {
  return (
    <div className='flex flex-col w-full p-3 items-center justify-center bg-gray-50 space-y-5'>
      <div>
        <img src="./Lab_05/Image 1858.png" alt="" />
      </div>
      <div className='flex flex-col p-2 w-full space-y-5'>
      <div className='flex flex-row gap-2 bg-pink-500 p-2 text-white rounded-xl'>
            <img src="./Lab_05/Squares four 1.png" alt=""  />
            <span>Dashboard</span>
        </div>
        <div className='flex flex-row gap-2 p-2 rounded-xl '>
            <img src="./Lab_05/Folder.png" alt="" />
            <span className='text-gray-600'>Projects</span>
        </div>
        <div className='flex flex-row gap-2 p-2 rounded-xl'>
            <img src="./Lab_05/Groups.png" alt="" />
            <span className='text-gray-600'>Teams</span>
        </div>
        <div className='flex flex-row gap-2 p-2 rounded-xl'>
            <img src="./Lab_05/pie chart.png" alt="" />
            <span className='text-gray-600'>Analytics</span>
        </div>
        <div className='flex flex-row gap-2 p-2 rounded-xl'>
            <img src="./Lab_05/Chat.png" alt="" />
            <span className='text-gray-600'>Messages</span>
        </div>
        <div className='flex flex-row gap-2 p-2 rounded-xl'>
            <img src="./Lab_05/Code.png" alt="" />
            <span className='text-gray-600'>Integration</span>
        </div>
        
      </div>
      <div className='bg-blue-50 p-5 flex flex-col items-center justify-center space-y-3'>
        <img src="./Lab_05/Group.png" className='w-[70%]' />
        <span className='text-xl text-black font-bold'>V2.0 is available</span>
        <button className='w-full border-solid border-blue-300 border-2 bg-white text-blue-300 p-1 rounded-xl'>Try now</button>
      </div>
    </div>
  )
}

export default Sidebar
