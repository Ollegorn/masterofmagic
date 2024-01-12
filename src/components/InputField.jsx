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
    setShowPassword(!showPassword);
  };

  const inputType = isPassword ? (showPassword ? "text" : "password") : "text";

  return (
    <div className="flex flex-col items-start justify-center gap-3 self-stretch">
      {label && (
        <label className="font-style:normal font-body text-base font-semibold text-Neutral-100">
          {label}
        </label>
      )}
      <div className="flex items-center gap-2 self-stretch rounded-lg bg-neutral-800 p-4">
        {icon && (
          <div className="item flex h-6 w-6 justify-center">
            {icon === "lock" ? (
              <LockClosedIcon className="size-6 text-Neutral-400" />
            ) : icon === "user" ? (
              <UserCircleIcon className="size-6 text-Neutral-400" />
            ) : icon === "email" ? (
              <EnvelopeIcon className="size-6 text-Neutral-400" />
            ) : null}
          </div>
        )}
        <input
          type={inputType}
          placeholder={placeholderText}
          className="flex flex-1 items-center"
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
