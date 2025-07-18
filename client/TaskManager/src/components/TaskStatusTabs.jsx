import React from "react";

const TaskStatusTabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="my-4 lg:my-2">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`relative px-3 md:px-4 py-2 text-sm font-medium ${
              activeTab === tab.label
                ? "text-primary"
                : "text-gray-300 hover:text-gray-400"
            } cursor-pointer`}
            onClick={() => setActiveTab(tab.label)}
          >
            <div className="flex items-center">
              <span className="text-xs">{tab.label}</span>
              <span
                className={`text-xs ml-2 px-2 py-0.5 rounded-full ${
                  activeTab === tab.label
                    ? "bg-primary text-white"
                    : "bg-gray-200/70 text-black"
                }`}
              >
                {tab.count}
              </span>
            </div>
            {activeTab === tab.label && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskStatusTabs;
