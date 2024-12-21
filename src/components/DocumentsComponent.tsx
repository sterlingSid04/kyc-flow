import React, { useState } from "react";
import Header from "./Header";
import DocumentUpload from "./DocumentUpload";

const DocumentsComponent = () => {
    const [image, setImage] = useState<File | null>(null);
    const handleImageChange = (image: File | null) => {
        if(image){
            setImage(image);
        } else{
            setImage(null);
        }
    }
  return (
    <div className="flex flex-col gap-2">
      <Header />
      <div className="flex w-[24.375rem] p-[1.5rem_1rem_1rem_1rem] flex-col items-start gap-[0.625rem]">
        <span className="text-customBlue font-sans text-[1.25rem] font-bold leading-normal tracking-[-0.01875rem]">
          Documents
        </span>
      </div>
      <div className="flex items-start gap-[0.625rem] self-stretch p-[0rem_1rem_1rem_1rem]">
        <span className="text-customBlue font-sans text-[0.75rem] font-medium leading-[1.25rem] tracking-[0.01125rem]">
          These documents are required to complete your KYC verification.
        </span>
      </div>
      <div className="flex items-center w-[24.375rem] h-[3rem] p-[0.5rem_1rem] gap-[0.625rem] bg-[#EFF3F6]">
        <span className="flex-1 text-customBlue font-sans text-[1rem] font-semibold leading-[1.5rem]">
          Upload Documents
        </span>
      </div>
      <div className="flex flex-col items-start w-[24.375rem] p-[0rem_1rem_1.5rem_1rem] bg-white">
        <DocumentUpload
          title="PAN Card"
          description="Click a picture of your PAN Card and upload"
          onImageChange={handleImageChange}
        />
      </div>
    </div>
  );
};

export default DocumentsComponent;
