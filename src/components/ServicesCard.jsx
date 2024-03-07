import React from 'react'


const ServicesCard = ({imageURL,label,subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px]  px-10 py-16 shadow-3xl'>
        <div className='w-11 h-11 flex justify-center  items-center bg-red-500 rounded-full'>
            <img src={imageURL} alt=""  width={24} height={24}/>

        </div>
        <h3 className='mt-5 font-serif text-3xl leading-normal font-bold'>{label}</h3>
            <p className='mt-3 break-words font-serif text-lg leading-normal text-slate-500'>{subtext}</p>

    </div>

  )
}

export default ServicesCard