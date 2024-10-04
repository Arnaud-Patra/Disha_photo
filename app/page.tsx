'use client';

import React, { useState } from 'react';
import MaterialCarousel from "./components/MaterialCarousel";
import TabsWithDropdowns from "./components/TabsWithDropdowns";
import InfoPage from "./components/InfoPage";

export default function Home() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const tabsData = [
    {
      label: "Documentry",
      options: ["Option 1", "Option 2", "Option 3"]
    },
    {
      label: "Portfolio",
      options: ["Editorial", "Portraits", "Nature mortes"]
    }
  ];

  const toggleInfo = () => setIsInfoOpen(!isInfoOpen);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="flex justify-between items-center mb-4 px-4 sm:px-5 mt-4">
        <h1 className="text-2xl font-bold text-[#666666]">Disha Patel</h1>
        <div className="flex items-center">
          <TabsWithDropdowns tabs={tabsData} />
          <button
            onClick={toggleInfo}
            className="ml-4 px-4 py-2 text-gray-700 hover:bg-gray-100 font-medium hover:text"
          >
            Info
          </button>
        </div>
      </div>
      <div className="flex-grow relative">
        <MaterialCarousel images={["/images/image1.jpg", "/images/image2.png", "/images/image3.jpg", "/images/image4.png"]} />
      </div>
      {isInfoOpen && <InfoPage onClose={toggleInfo} />}
    </div>
  );
}
