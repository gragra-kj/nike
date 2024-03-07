import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgURL} alt="" className='w-[280px] h-[280px]' />
        <div className='mt-8 flex justify-start gap-2.5'>
            <img src={star} alt="" width={24} height={24}/>
            <p className='text-x1 leading-normal font-serif text-slate-500'>(4.3)</p>
            <h3 className='mt-2 text-xl font-semibold font-mono'>{name}</h3>
            <p className='mt-2 font-semibold text font-serif text-red-400 leading-normal text-2xl'>{price}</p>

        </div>


    </div>

  )
}

export default PopularProductCard