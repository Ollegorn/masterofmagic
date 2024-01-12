import React, { useState } from "react";
import {
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  EnvelopeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const InputField = ({ icon, label, placeholderText, isPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const inputType = isPassword ? (showPassword ? "text" : "password") : "text";

  return (
    <div className="flex flex-col items-start justify-center gap-3 self-stretch">
      {label && (
        <label className="font-body text-base font-semibold text-Neutral-100">
          {label}
        </label>
      )}
      <div className="flex items-center gap-2 self-stretch rounded-lg bg-Neutral-800 p-4 focus-within:bg-Neutral-700 focus-within:shadow-glow hover:bg-Neutral-700 hover:shadow-glow">
        {
          <div className=" flex h-6 w-6 items-center justify-center">
            {icon === "lock" ? (
              <LockClosedIcon className="size-6 text-Neutral-400" />
            ) : icon === "user" ? (
              <UserCircleIcon className="size-6 text-Neutral-400" />
            ) : icon === "email" ? (
              <EnvelopeIcon className="size-6 text-Neutral-400" />
            ) : null}
          </div>
        }
        <input
          type={inputType}
          placeholder={placeholderText}
          className="flex flex-1 items-center bg-transparent text-Neutral-50 focus:outline-none"
        />
        {isPassword && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="h-6 w-6"
          >
            {showPassword ? (
              <EyeIcon className="size-6 text-Neutral-400" />
            ) : (
              <EyeSlashIcon className="size-6 text-Neutral-400" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
