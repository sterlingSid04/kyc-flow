import React from 'react'

interface InputComponentProps {
    title : string;
    placeholder : string;
    email? : boolean;
}



const InputComponent = ({title, placeholder, email=true} : InputComponentProps) => {
  return (
    <div className='flex flex-col items-start self-stretch gap-[0.25rem] p-[1rem_0rem_0.5rem_0rem]'>
        <div className='flex items-start self-stretch h-[1.5rem] gap-[0.625rem]'>
            <span className='text-customBlue text-center font-sans text-[0.875rem] font-bold leading-[1.5rem] tracking-[0.01313rem]'>
                {title}
            </span>
        </div>
        <input type={email? "email" : "text"} placeholder={placeholder} className='flex items-center w-[22.375rem] h-[3.5rem] p-[0.5rem_1rem] gap-[0.625rem] flex-shrink-0 rounded-[0.25rem] border border-[#8E959F] bg-white'/>

    </div>
  )
}

export default InputComponent