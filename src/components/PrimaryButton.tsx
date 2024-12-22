import React from 'react'

interface PrimaryButtonProps {
    link : string;
    onClick?: () => void;
}

const PrimaryButton = ({link, onClick} : PrimaryButtonProps) => {

  return (
    <a className='flex w-full' href={link} onClick={onClick}>
    <button className='flex w-[22.375rem] h-[3.5rem] p-[0.5rem_0rem] justify-center items-center gap-[0.625rem] rounded-[0.25rem] bg-[#052F5F]'>
        <span className='text-white text-center font-sans text-normal font-bold leading-[1.5rem]'>
            Next
        </span>
    </button>
    </a>
  )
}

export default PrimaryButton