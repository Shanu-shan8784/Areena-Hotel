import React from 'react'
import Navbar from '../../components/hotelOwner/Navbar'
import Sidebar from '../../components/hotelOwner/Sidebar'
import { Outlet } from 'react-router'

function Layout() {
  return (
    // 1. Ensure the wrapper is a flex column that spans the full viewport height
    <div className='flex flex-col h-screen overflow-hidden'>
      <Navbar/>
      
      {/* 2. min-h-0 is a flexbox trick to allow children to shrink/scroll properly */}
      <div className='flex flex-1 min-h-0'>
        <Sidebar/>
        
        {/* 3. Add overflow-y-auto so ONLY the content area scrolls, not the whole page */}
        <main className='flex-1 p-4 pt-10 md:px-10 overflow-y-auto bg-gray-50'>
            <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default Layout
