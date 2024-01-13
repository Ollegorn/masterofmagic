import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

function Login({ onSignupClick }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      // fetch logic
      if (response.ok) {
        // success
        setLoginMessage("Login successful! Redirecting...");
        setTimeout(() => {
          setLoginMessage("");
          window.location.href = "/";
        }, 1000);
      } else {
        setLoginMessage("Login failed. Please check your credentials.");
        console.error("Login failed");
      }
    } catch (error) {
      setLoginMessage("Error during login. Please try again.");
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="flex w-full flex-col items-center gap-4 rounded-3xl py-4 lg:gap-6 lg:py-6">
      <InputField icon="email" label="Email" placeholderText="user@email.com" />
      <InputField
        icon="lock"
        label="Password"
        placeholderText="enter your password"
        isPassword
      />
      <div className="flex w-full flex-col items-start py-4 lg:py-6">
        <Button variant="primary" className={`self-stretch`}>
          Log In
        </Button>
      </div>
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
