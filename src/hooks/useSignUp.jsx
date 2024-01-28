// useSignUp.jsx

import { useState } from "react";
import { Api_Endpoints } from "../services/ApiBaseLink";

const useSignUp = (onSignUpSuccess) => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    imageNumber: 0,
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleImageSelect = (imageNumber) => {
    setFormData((prevData) => ({
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

    if (!formData.userName) {
      newErrors.userName = "Username is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length <= 6) {
      newErrors.password = "Password must be more than 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
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
      console.log(formData);
      const response = await fetch(`${Api_Endpoints.postRegister}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onSignUpSuccess();
      } else {
        console.error("Sign up failed");
      }
    } catch (error) {
      console.error("Error during sign up:", error);
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleImageSelect,
    handleSubmit,
    setErrors: setFieldError,
  };
};

export default useSignUp;
