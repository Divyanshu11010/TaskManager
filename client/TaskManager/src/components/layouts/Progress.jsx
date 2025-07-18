import React from "react";

const Progress = ({ progress, status }) => {
    const getColor = () => {
        switch (status) {
            case 'Completed':
                return 'bg-green-800/30 text-green-300 border border-green-700';
            case 'Pending':
                return 'bg-purple-800/30 text-purple-300 border border-purple-700';
            case 'In Progress':
                return 'bg-blue-800/30 text-blue-300 border border-blue-700';
            default:
                return 'bg-gray-700/30 text-gray-300 border border-gray-600';
        }
    }

    return (
        <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className={`${getColor()} h-1.5 rounded-full text-center text-xs font-medium`} style={{ width: `${progress}%` }}>
            </div>
        </div>
    );
}

export default Progress;