import { useState } from "react";
import { useUser } from "../hooks/useUser";
import Header from "./Header";
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
    <div className="flex w-96 min-w-72 max-w-180 flex-col items-center gap-6 rounded-3xl p-6">
      <InputField icon="email" label="Email" placeholderText="user@email.com" />
      <InputField
        icon="lock"
        label="Password"
        placeholderText="●●●●●●●●"
        isPassword
      />
      <div className="flex w-full flex-col items-start py-4">
        <Button variant="primary" className={`self-stretch`}>
          Log In
        </Button>
      </div>
      <div className="flex items-center justify-center self-center">
        <button 
        className="transform transition-transform duration-300 hover:translate-y-[-3px] hover:text-primary04-50"
        onClick={onSignupClick}
        >
          Don't have an account?{" "}
          <span className="inline-block text-primary01-100">
            Sign Up
          </span>
        </button>
      </div>
    </div>
  );
}

export default Login;
