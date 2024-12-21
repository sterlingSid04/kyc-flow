import React, { useState } from 'react';

interface DocumentUploadProps {
    title: string;
    description: string;
    onImageChange: (image: File | null) => void; // Callback for the parent component
}

const DocumentUpload = ({ title, description, onImageChange }: DocumentUploadProps) => {
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const imageUrl = URL.createObjectURL(file); // Create a temporary URL for the image
            setUploadedImage(imageUrl); // Update the local state with the image URL
            onImageChange(file); // Notify the parent component with the uploaded file
        }
    };

    const handleRemoveImage = () => {
        setUploadedImage(null); // Reset the local state
        onImageChange(null); // Notify the parent component that the image is removed
    };

    return (
        <div className="flex items-center self-stretch p-[1rem_0rem_0.5rem_0rem] gap-[0.25rem] bg-white">
            <div className="flex flex-col items-start gap-[0.25rem] flex-[1_0_0]">
                <span className="text-customBlue text-center font-sans text-sm font-bold leading-[1.5rem] tracking-[0.01313rem]">
                    {title}
                </span>
                <span className="text-customBlue font-sans text-xs font-medium leading-[1.25rem] tracking-[0.015rem]">
                    {description}
                </span>
            </div>
            <div className="flex justify-end items-center gap-6 self-stretch p-[0.5rem_1.5rem_0.5rem_0.5rem] relative">
                <div
                    className="flex justify-center items-center gap-4 w-[7rem] h-[4.5rem] p-[0rem_1rem_0.25rem_1rem] rounded border-2 border-dashed border-[#CDCDCD]"
                    style={{
                        backgroundImage: uploadedImage ? `url(${uploadedImage})` : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundColor: uploadedImage ? "transparent" : "#f4f4f4",
                    }}
                >
                    {!uploadedImage && (
                        <span className="text-gray-500 text-sm">Upload Image</span>
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={handleImageUpload}
                    />
                </div>
                {uploadedImage && (
                    <button
                        className="absolute top-0 right-0 p-[0.2rem] bg-red-500 text-white text-xs rounded-full"
                        onClick={handleRemoveImage}
                    >
                        ×
                    </button>
                )}
            </div>
        </div>
    );
};

export default DocumentUpload;
