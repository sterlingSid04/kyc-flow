import React, { useState } from 'react';

interface EmailNameSelectorProps {
    emailName: string;
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const EmailNameSelector = ({ emailName, onClick }: EmailNameSelectorProps) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        // Call the parent's onClick function
        onClick(event);

        // Toggle the local state
        setIsSelected((prev) => !prev);
    };

    return (
        <div
            className={`flex items-start gap-[0.625rem] p-[0.25rem_1rem] rounded-md border border-[#8E959F] cursor-pointer ${
                isSelected ? 'bg-[#32547C]' : 'bg-white'
            }`}
            onClick={handleClick}
        >
            <span className={`${isSelected ? "text-white" : "text-[rgba(5,47,95,0.80)]"} text-center font-sans text-sm font-semibold leading-[1.5rem] tracking-[0.015rem]`}>
                {emailName}
            </span>
        </div>
    );
};

export default EmailNameSelector;
