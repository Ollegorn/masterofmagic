import React from "react";
import InputField from "./InputField";
import Button from "./Button";
import ImagesGrid from "./ImagesGrid";
import useSignUp from "../hooks/useSignUp";

function SignUp({ onLoginClick }) {
  const {
    formData,
    errors,
    setErrors,
    handleChange,
    handleImageSelect,
    handleSubmit,
  } = useSignUp(() => {
    console.log("Sign up successful!");
  });

  const handleUsernameChange = (event) => {
    handleChange("userName", event.target.value);
    setErrors({ ...errors, userName: "" });
  };

  const handleEmailChange = (event) => {
    handleChange("email", event.target.value);
    setErrors({ ...errors, email: "" });
  };

  const handlePasswordChange = (event) => {
    handleChange("password", event.target.value);
    setErrors({ ...errors, password: "" });
  };

  const handleConfirmPasswordChange = (event) => {
    handleChange("confirmPassword", event.target.value);
    setErrors({ ...errors, confirmPassword: "" });
  };

  return (
    <div className="flex w-full flex-col items-center gap-4 rounded-3xl py-4 lg:gap-6 lg:py-6">
      <InputField
        icon="user"
        label="Username"
        placeholderText="Aberforth99"
        value={formData.userName}
        onChange={handleUsernameChange}
      />
      {errors.userName && <p className="text-red-500">{errors.userName}</p>}
      <InputField
        icon="email"
        label="Email"
        placeholderText="user@email.com"
        value={formData.email}
        onChange={handleEmailChange}
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}
      <InputField
        icon="lock"
        label="Password"
        placeholderText="Enter at least 7 characters"
        isPassword
        value={formData.password}
        onChange={handlePasswordChange}
      />
      {errors.password && <p className="text-red-500">{errors.password}</p>}
      <InputField
        icon="lock"
        label="Confirm Password"
        placeholderText="Passwords must be the same"
        isPassword
        value={formData.confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
      <p className="font-body text-base font-semibold text-Neutral-100 self-start md:text-lg lg:text-xl xl:text-xl">
        Profile Picture
      </p>
      <div className="h-36 overflow-y-auto">
        <ImagesGrid images="avatar" onSelect={handleImageSelect} />
      </div>
      <div className="flex w-full flex-col items-start py-4 lg:py-6">
        <Button
          variant="primary"
          className={`self-stretch`}
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
      </div>
      <div className="flex w-full items-center justify-center">
        <button
          className="font-body text-sm font-semibold text-primary04-500 transition-all duration-300 hover:-translate-y-1 hover:text-primary04-400 lg:text-base xl:text-lg"
          onClick={onLoginClick}
        >
          Already have an account?{" "}
          <span className="inline-block text-primary04-300 hover:text-primary04-50">
            Log in
          </span>
        </button>
      </div>
    </div>
  );
}

export default SignUp;
