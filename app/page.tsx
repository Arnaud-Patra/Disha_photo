'use client';

import React, { useState } from 'react';
import MaterialCarousel from "./components/MaterialCarousel";
import TabsWithDropdowns from "./components/TabsWithDropdowns";
import InfoPage from "./components/InfoPage";

export default function Home() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const tabsData = [
    {
      label: "Series",
      options: ["Option 1", "Option 2", "Option 3"]
    },
    {
      label: "Portfolio",
      options: ["Editorial", "Portraits", "Nature mortes"]
    }
  ];
  
  const carouselImages = ["/images/image1.jpg", "/images/image2.png", "/images/image3.jpg", "/images/image4.png"];

  const toggleInfo = () => setIsInfoOpen(!isInfoOpen);

  return (
    <div className="bg-custom-bg h-screen flex flex-col overflow-hidden">
      <div className="flex justify-between items-center p-2 sm:p-3">

        <h1 className="text-2xl sm:text-4xl font-sans text-main-color">Disha Patel</h1>
        
        <div className="flex items-center">
          <TabsWithDropdowns tabs={tabsData} />
          <button
            onClick={toggleInfo}
            className="ml-2 sm:ml-4 px-2 sm:px-4 py-1 sm:py-2 text-main-color font-medium hover:text text-sm sm:text-base"
          >
            Info
          </button>
        </div>
      </div>
      <div className="flex-grow relative">
        <MaterialCarousel images={carouselImages} />
      </div>
      {isInfoOpen && (
        <div className="absolute inset-0 bg-custom-bg z-10">
          <InfoPage onClose={toggleInfo} />
        </div>
      )}
    </div>
  );
}
