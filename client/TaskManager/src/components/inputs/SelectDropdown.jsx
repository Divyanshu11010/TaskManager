import React, { useState } from "react";
import { LuChevronDown } from "react-icons/lu";

const SelectDropdown = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="form-input w-full text-gray-400 text-sm outline-none border border-slate-100 px-2.5 py-3 rounded-md mt-2 flex justify-between items-center"
      >
        {value ? options.find((opt) => opt.value === value)?.label : placeholder}
        <span className={`ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <LuChevronDown />
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute w-full bg-slate-800 border border-slate-500 rounded-md mt-1 shadow-md z-10">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-700"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectDropdown;
