import React, { useState } from 'react';
import EyeIcon from '../assets/eye.svg';
import EyeSlashIcon from '../assets/eye_slash.svg'
import EmailIcon from '../assets/email_outline.svg';
import LockIcon from '../assets/lockIcon.svg';
import UserIcon from '../assets/userIcon.svg';

const InputField = ({ icon, label, placeholderText, isPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = isPassword ? (showPassword ? 'text' : 'password') : 'text';

  const iconComponents = {
    email: EmailIcon,
    lock: LockIcon,
    user: UserIcon
  };

  return (
    <div className="flex flex-col justify-center items-start gap-3 self-stretch">
      {label && <label className="text-neutral-100 font-body text-base font-style:normal font-semibold">{label}</label>}
      <div className="flex p-4 items-center gap-2 self-stretch rounded-lg bg-neutral-800">
        {icon && <div className="flex w-6 h-6 justify-center item">{iconComponents[icon]}</div>}
        <input type={inputType} placeholder={placeholderText} className="flex p-0 items-center bg-transparent"/>
        {isPassword && (
          <button type="button" onClick={togglePasswordVisibility} className="w-6 h-6">
            {showPassword ? EyeIcon : EyeSlashIcon}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
