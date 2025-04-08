import React from 'react'
import {FaFacebook , FaGoogle , FaInstagram , FaPhone , FaTelegram} from 'react-icons/fa';
import {FaMapLocation} from 'react-icons/fa6'
import creditCards from '../../assets/website/credit-cards.webp'

function Footer() {
  return (
    <div className='bg-gradient-to-r from-yellow-500 to-yellow-700 pt-12 pb-8 text-white'>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">عمو علی کافه</h1>
            <p className="text-sm max-w-[300px]">چشمهایش قهوه ای بود و به حق فهمیده ام که قهوه از سیگار اعتیادآورتر است</p>
            <div className="">
              <p className="flex items-center gap-2 mt-2">
                <FaPhone/>
                09302451256
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaMapLocation/>
                نبریز سمت راست طبقه هشتم
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">لینک های سریع</h1>
            <div className="grid grid-cols-2 gap-3">
              <div className="">
                <ul className="space-y-2">
                  <li className="">خانه</li>
                  <li className="">درباره ما </li>
                  <li className="">تماس با ما</li>
                  <li className="">حریم شخصی</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">دنبال کنید</h1>
            <div className="flex items-center gap-3">
              <FaFacebook className='text-3xl hover:scale-105 duration-300' />
              <FaInstagram className='text-3xl hover:scale-105 duration-300' />
              <FaTelegram className='text-3xl hover:scale-105 duration-300' />
              <FaGoogle className='text-3xl hover:scale-105 duration-300' />
            </div>
          </div>
        </div>
        <p className='text-white text-center mt-8 border-t-2'>copyRight &copy; 2025 AliShahi All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
