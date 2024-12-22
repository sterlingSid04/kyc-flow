import React from 'react'

interface PrimaryButtonProps {
  link: string;
  onClick?: () => void;
  disabled?: boolean;  // Added disabled prop
}

const PrimaryButton = ({ link, onClick, disabled = true }: PrimaryButtonProps) => {
  return (
    <a
      className='flex w-full'
      href={link}
      onClick={disabled ? (e) => e.preventDefault() : onClick} // Prevent click if disabled
    >
      <button
        className={`flex w-[22.375rem] h-[3.5rem] p-[0.5rem_0rem] justify-center items-center gap-[0.625rem] rounded-[0.25rem] ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#052F5F]'}`}
        disabled={disabled} // This will disable the button
      >
        <span
          className={`text-white text-center font-sans text-normal font-bold leading-[1.5rem] ${disabled ? 'text-gray-600' : ''}`}
        >
          Next
        </span>
      </button>
    </a>
  )
}

export default PrimaryButton;
