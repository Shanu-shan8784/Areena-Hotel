import React, { useState} from 'react'
import { roomsDummyData } from '../../assets/assets'
import Title from '../../components/Title'

function ListRoom() {
  const [rooms, setRooms] = useState(roomsDummyData)

  // 1. Define it here
  const handleToggleAvailability = (id) => {
    setRooms((prevRooms)=> prevRooms.map((item)=>{
      if (item._id === id) {
        // Return a new object with the isAvailable property flipped
        return { ...item, isAvailable: !item.isAvailable };
      }
      // Return the original item if it's not the one we're looking for
      return item;
    }))
  };

  return (
    <div>
      <Title align="left" font="outfit" title="Room Listings" subTitle="View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for the users."/>
      <p className='text-gray-500 mt-8'>All rooms</p>
      <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-96 overflow-y-scroll mt-3'>
        <table className='w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='py-3 px-4 text-gray-800 font-medium'>Name</th>
              <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Facility</th>
              <th className='py-3 px-4 text-gray-800 font-medium'>Price Per Night</th>
              <th className='py-3 px-4 text-gray-800 font-medium text-center'>Actions</th>
            </tr>
          </thead>
          <tbody className='text-sm'>
            {
              rooms.map((item,index)=>(
                <tr key={index}>
                  <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                    {item.roomType}
                  </td>
                  <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                    {item.amenities.join(', ')}
                  </td>
                  <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                    {item.pricePerNight}
                  </td>
                  <td className='py-3 px-4 border-t border-gray-300 text-sm text-red-500 text-center'>
                    <label className='relative inline-flex items-center text-gray-900 cursor-pointer gap-3'>
                        <input type="checkbox" className='sr-only peer'
                        checked={item.isAvailable} 
                        // Add the onChange handler here
                        // In React, the handleToggleAvailability function isn't a built-in feature—you have to define it yourself in the component where your state (the list of rooms) lives.
                        onChange={(e) => handleToggleAvailability(item.id, e.target.checked)}
                        />
                        <div className='w-17 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200'></div>
                        <span className='dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5'></span>
                    </label>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ListRoom
