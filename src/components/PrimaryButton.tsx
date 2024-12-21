import React from 'react'

interface PrimaryButtonProps {
    link : string;
}

const PrimaryButton = ({link} : PrimaryButtonProps) => {

  return (
    <a className='flex w-full' href={link}>
    <button className='flex w-[22.375rem] h-[3.5rem] p-[0.5rem_0rem] justify-center items-center gap-[0.625rem] rounded-[0.25rem] bg-[#052F5F]'>
        <span className='text-white text-center font-sans text-[1.125rem] font-bold leading-[1.5rem]'>
            Next
        </span>
    </button>
    </a>
  )
}

export default PrimaryButton