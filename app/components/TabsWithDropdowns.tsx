import React from 'react';

interface TabData {
  label: string;
  options: string[];
}

interface TabsWithDropdownsProps {
  tabs: TabData[];
}

const TabsWithDropdowns: React.FC<TabsWithDropdownsProps> = ({ tabs }) => {
  return (
    <div className="flex space-x-4">
      {tabs.map((tab, index) => (
        <div key={index} className="relative group">
          <span className="text-[#666666] cursor-default">{tab.label}</span>
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
            <div className="py-1">
              {tab.options.map((option, optionIndex) => (
                <a 
                  key={optionIndex} 
                  href="#" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {option}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabsWithDropdowns;