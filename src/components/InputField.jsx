import React, { useState } from "react";
import EyeIcon from "../assets/eye.svg";
import EyeSlashIcon from "../assets/eye_slash.svg";
import EmailIcon from "../assets/email_outline.svg";
import LockIcon from "../assets/lockIcon.svg";
import UserIcon from "../assets/userIcon.svg";

const InputField = ({ icon, label, placeholderText, isPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = isPassword ? (showPassword ? "text" : "password") : "text";

  const iconComponents = {
    email: EmailIcon,
    lock: LockIcon,
    user: UserIcon,
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
            <img src={iconComponents[icon]} />
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
            {showPassword ? <img src={EyeIcon} /> : <img src={EyeSlashIcon} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
