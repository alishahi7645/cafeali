import React from 'react'
import worldMap from '../../assets/world-map.png'

function WhereToBuy() {
  return (
    <div className='container my-36'>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
        <div className='space-y-8'>
        <h1 className="text-3xl font-bold text-gray-900 font-serif">محصولات مارا از کل ایران بخرید</h1>
        <div className="flex items-center gap-4">
          <input type="text" placeholder='اسم' className='border p-1 rounded-lg w-full lg:w-[150px]' />
          <input type="email" placeholder='ایمیل' className='border p-1 rounded-lg w-full' />
        </div>
        <div className="flex items-center gap-4">
          <input type="text" placeholder='کشور' className='border p-1 rounded-lg w-full' />
        </div>
        <button className="bg-yellow-500 text-white p-2 rounded-lg w-full">همین الان سفارش بدهید</button>
        </div>
      </div>
      <div className="col-span-2">
        <img src={worldMap} alt="" className='w-full sm:w-[500px] mx-auto' />
      </div>
    </div>
  )
}

export default WhereToBuy
