import React from "react";
const Header = () => {
    
  return (
    <div className="flex items-center px-4 py-1 gap-10 w-[390px] h-[55.59px] bg-white shadow-md">
      <div className="flex items-center py-2 gap-1">
        <img src="/images/arrow.svg" alt="logo" width="20" height="20" />
        <span className="text-customBlue font-sans text-base font-bold">
          Back
        </span>
      </div>
      <div className="flex flex-col items-end gap-[0.625rem] pr-8 flex-1">
        <img src ="/images/logo_main.svg" alt="logo" width="96" height="48" />
      </div>
      <div className="flex gap-6 items-center">
        <img src="/images/finder.svg" alt="finder" width="16" height="16" />
        <img src="/images/cart.svg" alt="cart-logo" width="16" height="16" />
      </div>

    </div>
  );
};

export default Header;
