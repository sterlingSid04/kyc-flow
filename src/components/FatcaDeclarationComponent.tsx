import React, { useState } from "react";
import Header from "./Header";
import VerificationComponent from "./verificationComponent";

const FatcaDeclarationComponent = () => {
    const [citizenIsOn, setCitizenIsOn] = useState(false)
    const [taxIsOn, setTaxIsOn] = useState(false)
    const [politicallyIsOn, setpoliticallyIsOn] = useState(false)
  return (
    <div className="flex flex-col gap-2">
      <Header />
      <div className="flex w-[24.375rem] p-[1.5rem_1rem_1rem_1rem] flex-col items-start gap-[0.625rem]">
        <span className="text-customBlue font-sans text-[1.25rem] font-bold leading-normal tracking-[-0.01875rem]">
          FATCA Declaration
        </span>
      </div>
      <div className="flex items-start gap-[0.625rem] self-stretch p-[0rem_1rem_1rem_1rem]">
        <span className="text-customBlue font-sans text-[0.75rem] font-medium leading-[1.25rem] tracking-[0.01125rem]">
          Declare your FATCA details
        </span>
      </div>
      <div className="flex items-center w-[24.375rem] h-[3rem] p-[0.5rem_1rem] gap-[0.625rem] bg-[#EFF3F6]">
        <span className="flex-1 text-customBlue font-sans text-[1rem] font-semibold leading-[1.5rem]">
          Declaration
        </span>
      </div>
      <div className="flex w-[24.375rem] p-[0rem_1rem_1.5rem_1rem] flex-col items-start bg-white">
            <div className="flex w-[20.875rem] p-[1.5rem_0rem_0.5rem_0rem] items-start gap-[0.625rem]">
                <span className="text-customBlue text-center font-sans text-[0.875rem] font-bold leading-[1.5rem] tracking-[0.01313rem]">   
                Please verify that you are an:
                </span>
            </div>
            <VerificationComponent title="Indian Citizen" isOn={citizenIsOn} setIsOn={setCitizenIsOn}/>
      </div>
    </div>
  );
};

export default FatcaDeclarationComponent;
