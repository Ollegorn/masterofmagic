import React, { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { EyeSlashIcon} from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon} from "@heroicons/react/24/outline";

const InputField = ({ icon, label, placeholderText, isPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = isPassword ? (showPassword ? "text" : "password") : "text";

  const iconComponents = {
    email: <EnvelopeIcon />,
    lock: <LockClosedIcon />,
    user: <UserCircleIcon />,
  };

  return (
    <div className="flex flex-col items-start justify-center gap-3 self-stretch">
      {label && (
        <label className="font-style:normal font-body text-base font-semibold text-neutral-100">
          {label}
        </label>
      )}
      <div className="flex items-center gap-2 self-stretch rounded-lg bg-neutral-800 p-4">
        {icon && (
          <div className="item flex h-6 w-6 justify-center">
            {iconComponents[icon]}
          </div>
        )}
        <input
          type={inputType}
          placeholder={placeholderText}
          className="flex flex-1 items-center bg-transparent p-0"
        />
        {isPassword && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="h-6 w-6"
          >
            {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
