import React from "react";
import InputField from "./InputField";
import Button from "./Button";

function SignUp({ onLoginClick }) {
  return (
    <div className="flex w-full flex-col items-center gap-4 rounded-3xl py-4 lg:gap-6 lg:py-6">
      <InputField icon="user" label="Username" placeholderText="Aberforth99" />
      <InputField icon="email" label="Email" placeholderText="user@email.com" />
      <InputField
        icon="lock"
        label="Password"
        placeholderText="Enter at least 7 characters"
        isPassword
      />
      <InputField
        icon="lock"
        label="Confirm Password"
        placeholderText="Passwords must be the same"
        isPassword
      />
      <div className="flex w-full flex-col items-start py-4 lg:py-6">
        <Button variant="primary" className={`self-stretch`}>
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
