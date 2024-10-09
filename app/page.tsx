'use client';

import React, { useState } from 'react';
import MaterialCarousel from "./components/MaterialCarousel";
import TabsWithDropdowns from "./components/TabsWithDropdowns";
import InfoPage from "./components/InfoPage";

export default function Home() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  // Constants
  const tabsData = [
    {
      label: "Stories",
      options: ["Story 1", "Story 2", "Story 3"]
    },
    {
      label: "Portfolio",
      options: ["Editorial", "Portraits", "Nature mortes"]
    }
  ];
  const carouselImages = ["/carousel/car1.jpg", "/carousel/car2.jpg", "/carousel/car3.jpg", "/carousel/car4.jpg", "/carousel/car5.jpg"];

  const toggleInfo = () => setIsInfoOpen(!isInfoOpen);

  return (
    <div className="bg-custom-bg h-screen flex flex-col overflow-hidden font-sans">
      <div className="flex justify-between items-center p-2 sm:p-5">
        <h1 className="text-3xl sm:text-5xl font-sans text-main-color pl-4 sm:pl-5">
          DISHA<br />PATEL
        </h1>
        <div className="flex items-center text-xl">
          <TabsWithDropdowns tabs={tabsData} />
          <button
            onClick={toggleInfo}
            className="ml-2 sm:ml-4 px-2 sm:px-4 py-1 sm:py-2 text-main-color font-medium hover:text text-xl sm:text-xl"
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
