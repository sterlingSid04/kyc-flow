import React from 'react'

interface SecondaryButtonProps {
    link : string;
}

const SecondaryButton = ({link} : SecondaryButtonProps) => {
   return (
    <a className='flex w-full' href={link}>
    <button className='flex w-[22.375rem] h-[3.5rem] p-[0.5rem_0rem] justify-center items-center gap-[0.625rem] rounded-[0.25rem] bg-white'>
        <span className='text-customGrey text-center font-sans text-normal font-bold leading-[1.5rem]'>
            SKIP FOR NOW
        </span>
    </button>
    </a>
  )
}

export default SecondaryButton