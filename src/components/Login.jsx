import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import useLogin from "../hooks/useLogin";

function Login({ onSignupClick, closePopupOnSuccessLogin }) {
  const { formData, handleChange, handleSubmit, loginError } = useLogin(() => {
    setShowSuccessMessage(true);
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  return (
    <div className="flex w-full flex-col items-center gap-4 rounded-3xl py-4 lg:gap-6 lg:py-6">
      <InputField
        icon="email"
        label="Email"
        placeholderText="Enter your email"
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />
      <InputField
        icon="lock"
        label="Password"
        placeholderText="Enter your password"
        isPassword
        value={formData.password}
        onChange={(e) => handleChange("password", e.target.value)}
      />
      {loginError && <div className="text-red-500">{loginError}</div>}
      <div className="flex w-full flex-col items-start py-4 lg:py-6">
        <Button
          variant="primary"
          className={`self-stretch`}
          onClick={handleSubmit}
        >
          Log In
        </Button>
      </div>
      {showSuccessMessage && (
        <div className="text-green-500">Login successful!</div>
      )}
      <div className="flex w-full items-center justify-center">
        <button
          className="font-body text-sm font-semibold text-primary04-500 transition-all duration-300 hover:-translate-y-1 hover:text-primary04-400 lg:text-base xl:text-lg"
          onClick={onSignupClick}
        >
          Don't have an account?{" "}
          <span className="inline-block text-primary04-300 hover:text-primary04-50">
            Sign Up
          </span>
        </button>
      </div>
    </div>
  );
}

export default Login;
