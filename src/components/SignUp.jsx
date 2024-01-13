import React from 'react'
import InputField from './InputField';
import Button from './Button';

function SignUp({ onLoginClick }) {

  return (
    <div className="flex w-96 min-w-72 max-w-180 flex-col items-center gap-6 rounded-3xl p-6">
      <InputField icon="user" label="Username" placeholderText="Aberforth99" />
      <InputField icon="email" label="Email" placeholderText="user@email.com" />
      <InputField icon="lock" label="Password"
      placeholderText="Enter at least 7 characters" isPassword />
      <InputField icon="lock" label="Confirm Password"
      placeholderText="Passwords must be the same" isPassword />
      <div className="flex w-full flex-col items-start py-4">
        <Button variant="primary" className={`self-stretch`}>
          Sign Up
        </Button>
      </div>
      <div className="flex items-center justify-center self-center">
        <button 
        className="transform transition-transform duration-300 hover:translate-y-[-3px] hover:text-primary04-50"
        onClick={onLoginClick}
        >
          Already have an account?{" "}
          <span className="inline-block text-primary01-100">
            Log in
          </span>
        </button>
      </div>
    </div>
  )
}

export default SignUp;