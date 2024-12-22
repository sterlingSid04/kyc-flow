import React from "react";
import Header from "./Header";
import NameComponent from "./NameComponent";

const KycDetailsComponents = () => {
  return (
    <div className="flex flex-col gap-2">
      <Header />
      <div className="flex w-[24.375rem] p-[1.5rem_1rem_1rem_1rem] flex-col items-start gap-[0.625rem]">
        <span className="text-customBlue font-sans text-[1.25rem] font-bold leading-normal tracking-[-0.01875rem]">
          KYC Details
        </span>
      </div>
      <div className="flex items-start gap-[0.625rem] self-stretch p-[0rem_1rem_1rem_1rem]">
        <span className="text-customBlue font-sans text-[0.75rem] font-medium leading-[1.25rem] tracking-[0.01125rem]">
          Read below details carefully, they cannot be changed later.{" "}
        </span>
      </div>
      <div className="flex items-center w-[24.375rem] h-[3rem] p-[0.5rem_1rem] gap-[0.625rem] bg-[#EFF3F6]">
        <span className="flex-1 text-customBlue font-sans text-[1rem] font-semibold leading-[1.5rem]">
          Confirm Details
        </span>
      </div>
      <div className="flex flex-col items-center gap-6 py-6">
          <div className="flex flex-col items-start w-[22.375rem] p-1 px-4 rounded-lg border border-[#8E959F] bg-white">
              <div className="flex items-start gap-[0.625rem] py-2 self-stretch">
                  <span className="flex-1 text-customBlue font-sans text-sm font-bold leading-6 tracking-[0.01313rem]">
                      User Details
                  </span>
                  <div className="flex items-center gap-1">
                      <img src="/images/edit.svg" alt="edit" width={14} height={14} />
                      <span className="text-[#03A87D] font-sans text-sm font-bold leading-6 tracking-[0.01313rem]">
                          Edit
                      </span>
                  </div>
              </div>
              <div className="flex flex-col items-start gap-2 pb-2">
                  <NameComponent heading="PAN Card Number" description="something" />
              </div>
          </div>
      </div>
    </div>
  );
};

export default KycDetailsComponents;
