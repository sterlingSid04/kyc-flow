import React from "react";
import Header from "./Header";
const MainPage = () => {
  return (
    <div>
      <Header link="/" />
      <div className="flex items-center justify-center w-full h-full">
        <a
          className="w-[14.375rem] h-[4.8125rem] flex-shrink-0 bg-[#32547C]"
          href="/personal-details"
        >
          <div className="flex items-center justify-center w-full h-full">
            <span className="text-[#F1E2E2] font-sans text-[1.5rem] font-bold leading-[1.5rem]">
              Complete KYC
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default MainPage;
