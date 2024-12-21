import React from "react";

interface VerificationComponentProps {
  title: string;
  isOn: boolean;
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const VerificationComponent = ({
  title,
  isOn,
  setIsOn,
}: VerificationComponentProps) => {
  return (
    <div className="flex items-center gap-[3.0625rem] self-stretch p-[1rem_1.5rem_0rem_0rem] justify-between w-full">
      <div className="flex items-start gap-[0.625rem] flex-[1_0_0] justify-between">
        <span className="text-customBlue text-center font-sans text-[0.875rem] font-bold leading-[1.5rem] tracking-[0.01313rem]">
          {title}
        </span>
        <button
          onClick={() => setIsOn(!isOn)}
          className={`relative w-16 h-8 flex items-center rounded-full p-1 transition-colors ${
            isOn ? "bg-customBlue" : "bg-gray-300"
          }`}
        >
          <div
            className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
              isOn ? "translate-x-8" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default VerificationComponent;
