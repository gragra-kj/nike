import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'><span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span><br />
        We provide you <span className='text-red-400'> Super</span> <span className='text-red-400'> Quality </span> Shoes</h2>
        <p className='mt-4 lg:max-w-lg info-text' > Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.</p>

        <p className='mt-6 lg:max-w-lg info-text'>Our dedication to detail and excellence ensures your satisfaction</p>
        <div className='mt-11'>
          <Button label="View" />
        </div>

      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img src={shoe8} alt="shoe 8" width={570} height={522 } className='object-contain'/>
      </div>
    </section>
  )
}

export default SuperQuality