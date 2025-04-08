import React from 'react'
import Bgimage from '../../assets/bg-slate.png'
import coffeemain from '../../assets/black.png'

function Hero() {
  const bgimage = {
    backgroundImage: `url(${Bgimage})`,
    backgroundSize: "cover",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
  return (
    <main style={bgimage}>
      <section className='w-full min-h-[520px]'>
        <div className="container">
          
          {/* hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[620px]">
            <div className='text-orange-100 mt-[50px] md:mt-0 p-4 space-y-28'>
              <h1 className="text-7xl font-bold leading-light mr-14">بلک کافی</h1>
              <div className='relative'>
                <div className='relative z-10 space-y-4'>
                  <h1 className='text-2xl'>عاشقان لایف استایل مشکی</h1>
                  <h1 className='text-sm opacity-55 leading-loose'>بوی قهوه به قدری زیباست که نمیتونه متعلق به این جهان باشه...!
                     اونم کنار یار!</h1>
                </div>
                <div className="absolute -top-6 -right-10 w-[300px] h-[180px] bg-gray-arkGray/50"></div>
              </div>
            </div>
            <div className='relative'>
              <img src={coffeemain} alt="black coffee" className='relative z-40 h-[300px] md:h-[600px] img-shadow' />
              <div className="h-[180px] w-[180px] absolute top-24 -left-16 border-yellow-500 border-[20px] rounded-full z-10"></div>
              {/* <div className="absolute -top-16 right-[60px] z-[1]">
                <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none">بلک کافی</h1>
              </div> */}
            </div>

            <div className='text-orange-100 mt-[50px] md:mt-0 p-4 space-y-28 max-lg:hidden'>
              <h1 className="opacity-0 text-7xl font-bold leading-light mr-14">بلک کافی</h1>
              <div className='relative'>
                <div className='relative z-10 space-y-4'>
                  <h1 className='text-2xl'> لایف استایل مشکی</h1>
                  <h1 className='text-sm opacity-55 leading-loose'>بوی قهوه به قدری زیباست که نمیتونه متعلق به این جهان باشه...!
                     اونم کنار یار!</h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[300px] h-[180px] bg-gray-arkGray/50"></div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero
