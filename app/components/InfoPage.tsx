import React from 'react';
import Image from 'next/image';

interface InfoPageProps {
  onClose: () => void;
}

const InfoPage: React.FC<InfoPageProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-white z-50 overflow-auto">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-2xl text-[#666666]"
      >
        &times;
      </button>
      <div className="flex min-h-screen">
        <div className="w-1/3 relative">
          <Image
            src="/images/image4.png"
            alt="Descriptive alt text"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-2/3 flex items-center justify-center p-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold mb-4">Information Title</h1>
            <p className="text-lg">
              This is where you can add your detailed information content. 
              You can provide a longer description, explanation, or any other 
              relevant details here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;