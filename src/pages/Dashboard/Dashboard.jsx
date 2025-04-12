import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Overview from '../../components/Overview/Overview'
import CustomDataTable from '../../components/DataTable/CustomDataTable'


function Dashboard() {
  return (
    <div className='grid grid-cols-4 p-2 '>
        <div className='col-span-1 '>
            <Sidebar />
        </div>
        <div className='col-span-3'>
            <Header/>
            <Overview/>
            <CustomDataTable />
        </div>
      
    </div>
  )
}

export default Dashboard
