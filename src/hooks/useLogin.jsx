import { useState } from "react";
import { Api_Endpoints } from "../services/ApiBaseLink";

const useLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log(formData);
    try {
      const response = await fetch(`${Api_Endpoints.postLogin}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Login successfull");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useLogin;
