import React from 'react'

interface NameComponentProps {
    heading: string;
    description: string | null;
  
}

const NameComponent = ({heading, description} : NameComponentProps) => {
  return (
    <div className='flex flex-col items-start w-[20.375rem]'>
        <span className='text-[#8E959F] font-sans text-xs font-normal leading-5 tracking-[0.015rem]'>
            {heading}
        </span>
        <span className='text-customBlue font-sans text-sm font-medium leading-6 tracking-[0.01313rem]'>
            {description}
        </span>
    </div>
  )
}

export default NameComponent