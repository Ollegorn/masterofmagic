import React, { useState } from "react";
import {
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  EnvelopeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const InputField = ({ icon, label, placeholderText, isPassword, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const inputType = isPassword ? (showPassword ? "text" : "password") : "text";

  return (
    <div className="flex flex-col items-start justify-center gap-2 self-stretch lg:gap-3">
      {label && (
        <label className="font-body text-base font-semibold text-Neutral-100 md:text-lg lg:text-xl xl:text-xl">
          {label}
        </label>
      )}
      <div className={`flex items-center gap-2 self-stretch rounded-lg bg-Neutral-800 p-4 focus-within:bg-Neutral-700 focus-within:shadow-glow hover:bg-Neutral-700 hover:shadow-glow md:gap-3 ${icon ? "relative" : "pl-0"}`}>
        {icon && (
          <div className="flex size-6 items-center justify-center">
            {icon === "lock" ? (
              <LockClosedIcon className="size-6 text-Neutral-400 md:size-7" />
            ) : icon === "user" ? (
              <UserCircleIcon className="size-6 text-Neutral-400 md:size-7" />
            ) : icon === "email" ? (
              <EnvelopeIcon className="size-6 text-Neutral-400 md:size-7" />
            ) : null}
          </div>
        )}
        <input
          type={inputType}
          placeholder={placeholderText}
          className={`flex flex-1 items-center bg-transparent text-base text-Neutral-50 focus:outline-none md:text-lg lg:text-xl xl:text-2xl ${icon ? "" : "pl-4"}`}
          onChange={onChange}
        />
        {isPassword && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="size-6"
          >
            {showPassword ? (
              <EyeIcon className="size-6 text-Neutral-400 md:size-7" />
            ) : (
              <EyeSlashIcon className="md-size-7 size-6 text-Neutral-400" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
