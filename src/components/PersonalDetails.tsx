import React, { useState } from "react";
import Header from "./Header";
import InputComponent from "./InputComponent";
import EmailNameSelector from "./EmailNameSelector";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const PersonalDetails = () => {
  const [email, setEmail] = useState("gmail");

  const [formData, setFormData] = useState({
    maritalStatus: "",
    fatherName: "",
    motherName: "",
    email: "",
    annualIncome: "",
  });

  const updateFormData = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    // Save to localStorage
    localStorage.setItem("kycData", JSON.stringify(formData));

    console.log("formdata is", formData);

    // Send to API
    const response = await fetch("https://run.mocky.io/v3/5938a5e1-276f-4b4f-9df2-554f265ce8c2", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log("API Response from Mock API is", data); // For demonstration purposes we are using a Mock API
  };



  return (
    <div className="flex flex-col gap-2">
      <Header link="/" />
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
                  onChange={(e) => updateFormData("maritalStatus", e.target.value)}
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
                  onChange={(e) => updateFormData("maritalStatus", e.target.value)}
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
        onChange={(value) => updateFormData("fatherName", value)}
      />
      <InputComponent
        title="Mother's Name"
        placeholder="Enter your mother's name here"
        onChange={(value) => updateFormData("motherName", value)}
      />
      <InputComponent
        title="Email"
        placeholder={email}
        onChange={(value) => updateFormData("email", value)}
      />
          <div className="flex justify-center flex-wrap items-start self-stretch h-[6.25rem] p-[0rem_1rem_0.25rem_0.375rem] gap-[0.5rem] rounded-[0.5rem]">
            <EmailNameSelector
              emailName="gmail.com"
              onClick={(event: any) => setEmail("gmail.com")}
            />
            <EmailNameSelector
              emailName="yahoo.com"
              onClick={(event: any) => setEmail("yahoo.com")}
            />
            <EmailNameSelector
              emailName="yahoo.co.in"
              onClick={(event: any) => setEmail("yahoo.co.in")}
            />
            <EmailNameSelector
              emailName="rediff.com"
              onClick={(event: any) => setEmail("rediff.com")}
            />
          </div>
          <div className="flex items-start self-stretch gap-[0.625rem]">
            <span className="text-customBlue text-center font-sans text-[0.875rem] font-bold leading-[1.5rem] tracking-[0.01313rem]">
              Annual Income
            </span>
          </div>
          <div className="flex flex-col gap-1 items-start pb-2">
              <div className="flex items-center w-[9rem] gap-[0.375rem]">
                <input
                  type="radio"
                  id="Below 1 Lakh"
                  name="maritalStatus"
                  value="Below 1 Lakh"
                  onChange={(e) => updateFormData("annualIncome", e.target.value)}
                />
                <label
                  htmlFor="Below 1 Lakh"
                  className="text-customBlue text-[0.875rem] font-sans  font-semibold leading-[1.5rem] tracking-[0.01313rem]"
                >
                  Below 1 Lakh
                </label>
              </div>
              <div className="flex items-center w-[9rem] gap-[0.375rem]">
                <input
                  type="radio"
                  id="1-5 Lakhs"
                  name="maritalStatus"
                  value="1-5 Lakhs"
                  onChange={(e) => updateFormData("annualIncome", e.target.value)}
                />
                <label
                  htmlFor="1-5 Lakhs"
                  className="text-customBlue text-[0.875rem] font-sans font-semibold leading-[1.5rem] tracking-[0.01313rem]"
                >
                  1-5 Lakhs
                </label>
              </div>
              <div className="flex items-center w-[9rem] gap-[0.375rem]">
                <input
                  type="radio"
                  id="5-10 Lakhs"
                  name="maritalStatus"
                  value="5-10 Lakhs"
                  onChange={(e) => updateFormData("annualIncome", e.target.value)}
                />
                <label
                  htmlFor="5-10 Lakhs"
                  className="text-customBlue text-[0.875rem] font-sans  font-semibold leading-[1.5rem] tracking-[0.01313rem]"
                >
                  5-10 Lakhs
                </label>
              </div>
              <div className="flex items-center w-[9rem] gap-[0.375rem]">
                <input
                  type="radio"
                  id="25 lakhs and above"
                  name="maritalStatus"
                  value="25 lakhs and above"
                  onChange={(e) => updateFormData("annualIncome", e.target.value)}
                />
                <label
                  htmlFor="25 lakhs and above"
                  className="text-customBlue text-[0.875rem] font-sans  font-semibold leading-[1.5rem] tracking-[0.01313rem]"
                >
                  25 lakhs and above
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-2">
            <PrimaryButton link="/documents" onClick={handleSubmit} disabled ={false}/>
            <SecondaryButton link="/documents" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
