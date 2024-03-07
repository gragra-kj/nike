import React from 'react'

const Button = ({label, iconURL}) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserat text-lg leading-none rounded-full text-white bg-red-600 border-red-600'>
        {label}
        {iconURL &&
        <img src={iconURL} alt="arrow" className='ml-2 rounded-full w-5 h-5'/>}
    </button>
  )
}

export default Button