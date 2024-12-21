import React, { useState } from "react";
import Header from "./Header";
import InputComponent from "./InputComponent";
import EmailNameSelector from "./emailNameSelector";

const PersonalDetails = () => {
    const [email, setEmail] = useState("gmail");

    console.log("email is", email);
  return (
    <div className="flex flex-col gap-2">
      <Header />
      <div className="flex flex-col">
        <div className="flex w-[24.375rem] p-[1.5rem_1rem_1rem_1rem] flex-col items-start gap-[0.625rem]">
          <span className="text-customBlue font-sans text-[1.25rem] font-bold leading-normal tracking-[-0.01875rem]">
            Personal Details
          </span>
        </div>
        <div className="flex items-start gap-[0.625rem] self-stretch p-[0rem_1rem_1rem_1rem]">
          <span className="text-customBlue font-sans text-[0.75rem] font-medium leading-[1.25rem] tracking-[0.01125rem]">
            These details are required to complete your KYC verification.
          </span>
        </div>
        <div className="flex items-center w-[24.375rem] h-[3rem] p-[0.5rem_1rem] gap-[0.625rem] bg-[#EFF3F6]">
          <span className="flex-1 text-customBlue font-sans text-[1rem] font-semibold leading-[1.5rem]">
            Personal Details
          </span>
        </div>
        <div className="flex flex-col items-start w-[24.375rem] p-[0rem_1rem_1.5rem_1rem]">
          <div className="flex flex-col items-start self-stretch gap-[0.5rem] p-[1rem_0rem_0.5rem_0rem]">
            <div className="flex items-start self-stretch gap-[0.625rem]">
              <span className="text-customBlue text-center font-sans text-[0.875rem] font-bold leading-[1.5rem] tracking-[0.01313rem]">
                Marital Status
              </span>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex items-center w-[9rem] gap-[0.375rem]">
                <input
                  type="radio"
                  id="single"
                  name="maritalStatus"
                  value="single"
                />
                <label
                  htmlFor="Single"
                  className="text-customBlue text-[0.875rem] font-sans  font-semibold leading-[1.5rem] tracking-[0.01313rem]"
                >
                  Single
                </label>
              </div>
              <div className="flex items-center w-[9rem] gap-[0.375rem]">
                <input
                  type="radio"
                  id="married"
                  name="maritalStatus"
                  value="married"
                />
                <label
                  htmlFor="married"
                  className="text-customBlue text-[0.875rem] font-sans font-semibold leading-[1.5rem] tracking-[0.01313rem]"
                >
                  Married
                </label>
              </div>
            </div>
          </div>
          <InputComponent
            title="Father's Name"
            placeholder="Enter your father's name here"
          />
          <InputComponent
            title="Mother's Name"
            placeholder="Enter your Mother's name here"
          />
          <InputComponent
            title="Email"
            placeholder={email}
            email={true}
          />
          <div className="flex justify-center flex-wrap items-start self-stretch h-[6.25rem] p-[0rem_1rem_0.25rem_0.375rem] gap-[0.5rem] rounded-[0.5rem]">
                <EmailNameSelector emailName="gmail.com" onClick={(event : any) => setEmail(event.target.value)} />
                <EmailNameSelector emailName="yahoo.com" onClick={(event : any) => setEmail(event.target.value)} />
                <EmailNameSelector emailName="yahoo.co.in" onClick={(event : any) => setEmail(event.target.value)} />
                <EmailNameSelector emailName="rediff.com" onClick={(event : any) => setEmail(event.target.value)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
