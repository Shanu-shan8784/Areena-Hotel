import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router'
import Home from './pages/Home';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms';
import RoomsDetails from './pages/RoomsDetails';
import MyBookings from './pages/MyBookings';
import HotelReg from './components/HotelReg';
import Layout from './pages/hotelOwner/Layout';
import Dashboard from './pages/hotelOwner/Dashboard';
import AddRoom from './pages/hotelOwner/AddRoom';
import ListRoom from './pages/hotelOwner/ListRoom';


function App() {
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div>
    {!isOwnerPath && <Navbar/>}
    {false && <HotelReg/>}
    
    <div className='min-h-[70vh]'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/rooms' element={<AllRooms/>}/>
      <Route path='/rooms/:id' element={<RoomsDetails/>}/>
      <Route path='/my-bookings' element={<MyBookings/>}/>
      <Route path='/owner' element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='add-room' element={<AddRoom/>}/>
          <Route path='list-room' element={<ListRoom/>}/>
      </Route>
    </Routes>
    </div>

    <Footer/>

    {/* --- WHATSAPP STICKY ICON --- */}
      <a 
        href="https://wa.me/923472564385?text=How%20can%20I%20get%20more%20information?"
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group flex items-center"
      >
        {/* Tooltip */}
        <span className="mr-3 scale-0 group-hover:scale-100 transition-all duration-300 origin-right bg-gray-800 text-white text-xs py-1.5 px-3 rounded shadow-lg">
          Chat with us
        </span>

        {/* Icon Container */}
        <div className="w-14 h-14 bg-[#25D366] rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:bg-[#128C7E] hover:-translate-y-1.5 flex items-center justify-center border-2 border-white/20">
          <i className="fa-brands fa-whatsapp text-white font-bold text-3xl"></i>
        </div>
      </a>
      {/* ---------------------------- */}
    
    </div>
  )
}

export default App


