import React, { useState } from 'react';

const tabs = [
  { label: 'All', count: 4500 },
  { label: 'Draft', count: 1203 },
  { label: 'Pending', count: 890 },
  { label: 'Published', count: 2432 },
  { label: 'Archived', count: 320 },
];

const Contentbuttons = () => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="flex flex-wrap justify-start sm:justify-start items-center gap-2 p-2 bg-white rounded-md shadow-sm overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => setActiveTab(tab.label)}
          className={`flex items-center px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition
            ${activeTab === tab.label
              ? 'bg-[#1A1443] text-white'
              : 'bg-[#F5F5F5] text-[#6E7191] hover:bg-[#EBEBF0]'
            }`}
        >
          {tab.label}
          <span className="ml-1 text-xs text-[#A0A3BD] font-normal">
            ({tab.count})
          </span>
        </button>
      ))}
    </div>
  );
};

export default Contentbuttons;
