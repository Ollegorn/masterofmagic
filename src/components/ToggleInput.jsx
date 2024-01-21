import React, { useState } from 'react';

function ToggleInput({ label, initialValue, onChange }) {
  const [isChecked, setIsChecked] = useState(initialValue);

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex p-4 items-center gap-4 self-stretch rounded-lg justify-between bg-Neutral-800">
      <p className="font-body text-base font-semibold text-Neutral-100 md:text-lg lg:text-xl xl:text-xl">{label}</p>
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input type="checkbox" className="hidden" checked={isChecked} onChange={handleToggle} />
          <div className={`w-16 h-8 rounded-full shadow-inner ${isChecked ? "bg-primary03-500" : "bg-Neutral-500"}`}></div>
          <div className={`absolute w-6 h-6 bg-white rounded-full shadow inset-y-1 left-2 ${isChecked ? 'transform translate-x-full' : ''}`}></div>
        </div>
      </label>
    </div>
  );
}

export default ToggleInput;
