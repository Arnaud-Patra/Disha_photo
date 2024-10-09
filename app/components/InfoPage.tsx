import React from 'react';
import Image from 'next/image';

interface InfoPageProps {
  onClose: () => void;
}

const InfoPage: React.FC<InfoPageProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-custom-bg z-50 overflow-auto">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-2xl text-[#666666]"
      >
        &times;
      </button>
      <div className="flex min-h-screen">
        <div className="w-1/3 relative">
          <Image
            src="/images/profile.jpg"
            alt="Descriptive alt text"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-2/3 flex text-[#666666] items-center justify-center p-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold mb-4">Disha Patel</h1>
            <p className="text-lg">
              Disha Patel (b. 1998) is a photographer based in Paris. She specializes in portrait photography and has a passion for capturing the essence of her subjects.
              She is passionate about photo journalism and has a keen interest in social issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;