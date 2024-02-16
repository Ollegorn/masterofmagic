import { useState } from "react";
import { Api_Endpoints } from "../services/ApiBaseLink";
import { useCookies } from "react-cookie";
import useLogin from "./useLogin";

const useSignUp = (onSignUpSuccess) => {
  const [formDataSignup, setFormDataSignup] = useState({
    userName: "",
    email: "",
    imageNumber: 0,
    password: "",
    confirmPassword: "",
  });

  const loginHook = useLogin(onSignUpSuccess);
  const [cookies, setCookie] = useCookies(["jwtToken", "refreshToken"]);

  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (fieldName, value) => {
    setFormDataSignup((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleImageSelect = (imageNumber) => {
    setFormDataSignup((prevData) => ({
      ...prevData,
      imageNumber: imageNumber,
    }));
  };

  const setFieldError = (fieldName, error) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: error,
    }));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formDataSignup.userName) {
      newErrors.userName = "Username is required";
    }

    if (!formDataSignup.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formDataSignup.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formDataSignup.password) {
      newErrors.password = "Password is required";
    } else if (formDataSignup.password.length <= 6) {
      newErrors.password = "Password must be more than 6 characters";
    }

    if (formDataSignup.password !== formDataSignup.confirmPassword) {
      newErrors.confirmPassword = "Password and Confirm Password must match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    const isFormValid = validateForm();

    if (!isFormValid) {
      console.error("Form validation failed");
      return;
    }

    try {
      const response = await fetch(`${Api_Endpoints.postRegister}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataSignup),
      });

      if (response.ok) {
        const formDataLogin = {
          email: formDataSignup.email,
          password: formDataSignup.password
        }
        await loginHook.handleSubmitFromSignup(formDataLogin);
        onSignUpSuccess();
      } else {
        console.error("Sign up failed");
      }
    } catch (error) {
      console.error("Error during sign up:", error);
    }
  };

  return {
    formDataSignup,
    errors,
    handleChange,
    handleImageSelect,
    handleSubmit,
    setErrors: setFieldError,
  };
};

export default useSignUp;
