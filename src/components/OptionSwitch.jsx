import React, { useState } from 'react';

const ToggleSwitch = ({ label, option1, option2 }) => {
  const [selectedOption, setSelectedOption] = useState(option1);

  const handleToggleOption1 = () => {
    if (selectedOption !== option1) {
      setSelectedOption(option1);
    }
  };

  const handleToggleOption2 = () => {
    if (selectedOption !== option2) {
      setSelectedOption(option2);
    }
  };

  return (
    <div className="flex flex-col xs:flex-row items-center p-4 gap-4 self-stretch bg-Neutral-800 rounded-lg justify-between">
      <p className="font-body text-base font-semibold text-Neutral-100 md:text-lg lg:text-xl ">{label}</p>
      <div className="flex w-full max-w-80 items-center p-2 rounded-lg text-sm sm:text-lg lg:text-xl bg-Neutral-700">
        <button
          className={`rounded-lg w-1/2 py-2 focus:outline-none font-semibold font-body ${
            selectedOption === option1 ? 'bg-primary03-400 text-primary03-900' : ' bg-Neutral-700  text-Neutral-300'
          }`}
          onClick={handleToggleOption1}
        >
          {option1}
        </button>
        <button
          className={`rounded-lg p-2 w-1/2 focus:outline-none font-semibold font-body ${
            selectedOption === option1 ? 'bg-Neutral-700  text-Neutral-300' : 'bg-primary03-400 text-primary03-900'
          }`}
          onClick={handleToggleOption2}
        >
          {option2}
        </button>
      </div>
    </div>
  );
};

export default ToggleSwitch;
