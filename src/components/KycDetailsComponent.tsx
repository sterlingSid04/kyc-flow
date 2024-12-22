import React, { useEffect, useState } from "react";
import Header from "./Header";
import NameComponent from "./NameComponent";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const KycDetailsComponents = () => {
  const [kycData, setKycData] = useState<{ [key: string]: string }>({
    email: "", // Set default values for your kycData fields if needed.
    name: "",
    maritalStatus: "",
    annualIncome: "",
    fatherName: "",
    motherName: "",
  });

  // useEffect for setting the Next button 

  // useEffect is used so that we set storedData only when client side has rendered properly as Astro uses SSR initially.
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("kycData") || "{}");
    setKycData(storedData);
  }, []);
  return (
    <div className="flex flex-col gap-2">
      <Header link="/fatca-declaration" />
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
        {/* User Details Section ----------------------> */}
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
            <NameComponent
              heading="PAN Card Number"
              description="Indian citizen"
            />
            <NameComponent
              heading="Name"
              description="Siddharth Poddar"
            />
          </div>
        </div>

        {/* Personal Details Section ----------------------> */}

        <div className="flex flex-col items-start w-[22.375rem] p-1 px-4 rounded-lg border border-[#8E959F] bg-white">
          <div className="flex items-start gap-[0.625rem] py-2 self-stretch">
            <span className="flex-1 text-customBlue font-sans text-sm font-bold leading-6 tracking-[0.01313rem]">
              Personal Details
            </span>
          </div>
          <div className="flex flex-col items-start gap-2 pb-2">
            <NameComponent
              heading="Gender"
              description="Male"
            />
            <NameComponent
              heading="Date of birth"
              description="04/05/2001"
            />
            <NameComponent
              heading="Address"
              description="India, Earth, Milky Way Galaxy, Solar System"
            />
            <NameComponent
              heading="Pincode"
              description="232131"
            />
          </div>
          <div className="flex items-start w-[20.375rem] p-2 gap-[0.625rem] bg-[#F0F3F5]">
            <span className="text-customBlue font-sans text-sm  font-bold leading-5 tracking-[0.015rem] items-center justify-center">
              Note:
            </span>
            <span className="text-customBlue font-sans text-sm font-medium leading-6 tracking-[0.01313rem]">
              Please verify the details carefully before proceeding.
            </span>
          </div>
        </div>

        {/* Kyc Details Section ----------------------> */}

        <div className="flex flex-col items-start w-[22.375rem] p-1 px-4 rounded-lg border border-[#8E959F] bg-white">
          <div className="flex items-start gap-[0.625rem] py-2 self-stretch">
            <span className="flex-1 text-customBlue font-sans text-sm font-bold leading-6 tracking-[0.01313rem]">
              Kyc Details
            </span>
            <div className="flex items-center gap-1">
              <img src="/images/edit.svg" alt="edit" width={14} height={14} />
              <span className="text-[#03A87D] font-sans text-sm font-bold leading-6 tracking-[0.01313rem]">
                Edit
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 pb-2">
            <NameComponent
              heading="Email"
              description={kycData.email}
            />
            <div className="flex items-start gap-2">
              <NameComponent
                heading="Marital Status"
                description={kycData.maritalStatus}
              />
              <NameComponent
                heading="Annual Income"
                description={kycData.annualIncome}
              />
            </div>
            <div className="flex items-start gap-2">
              <NameComponent
                heading="Father's Name"
                description={kycData.fatherName}
              />
              <NameComponent
                heading="Mother's Name"
                description={kycData.motherName}
              />
            </div>
          </div>
        </div>

        {/* Documents Section(for this section for demonstration purposes the images are kept blank, in ideal situations they would have been fetched through an API call) -----------------> */}

        <div className="flex flex-col items-start w-[22.375rem] p-1 px-4 rounded-lg border border-[#8E959F] bg-white">
          <div className="flex items-start gap-[0.625rem] py-2 self-stretch">
            <span className="flex-1 text-customBlue font-sans text-sm font-bold leading-6 tracking-[0.01313rem]">
              Documents
            </span>
            <div className="flex items-center gap-1">
              <img src="/images/edit.svg" alt="edit" width={14} height={14} />
              <span className="text-[#03A87D] font-sans text-sm font-bold leading-6 tracking-[0.01313rem]">
                Edit
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 pb-2">
            <div className="flex items-start gap-6 pt-2 self-stretch">
              <div className="flex flex-col items-center gap-2 py-2 self-stretch">
                <span className="text-customGrey font-sans text-sm font-bold leading-6 tracking-[0.01313rem]">
                  Photo
                </span>
                <div className="flex h-18 px-3 justify-center items-center gap-4 rounded border-[1.5px] border-dashed border-[#CDCDCD]">
                  <img
                    src="/images/blank.svg"
                    alt="blank"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 py-2 self-stretch">
                <span className="text-customGrey font-sans text-sm font-bold leading-6 tracking-[0.01313rem]">
                  PAN Card
                </span>
                <div className="flex h-18 px-3 justify-center items-center gap-4 rounded border-[1.5px] border-dashed border-[#CDCDCD]">
                  <img
                    src="/images/blank.svg"
                    alt="blank"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 py-2 self-stretch">
                <span className="text-customGrey font-sans text-sm font-bold leading-6 tracking-[0.01313rem]">
                  Signature
                </span>
                <div className="flex h-18 px-3 justify-center items-center gap-4 rounded border-[1.5px] border-dashed border-[#CDCDCD]">
                  <img
                    src="/images/blank.svg"
                    alt="blank"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <PrimaryButton link="/kyc-details" disabled = {false} />
          <SecondaryButton link="/kyc-details" />
        </div>

      </div>
    </div>
  );
};

export default KycDetailsComponents;
