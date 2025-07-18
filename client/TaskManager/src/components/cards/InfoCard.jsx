import React from 'react';

const InfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${color}`} />
      <span className="text-sm md:text-base text-gray-300 font-semibold">{value}</span>
      <p className="text-xs md:text-sm text-gray-300">{label}</p>
    </div>
  );
};

export default InfoCard;
