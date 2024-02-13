import { useState } from "react";
import { Api_Endpoints } from "../services/ApiBaseLink";
import { useCookies } from "react-cookie";

const useLogin = (onLoginSuccess) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [cookies, setCookie] = useCookies(["jwtToken", "refreshToken"]);

  const handleChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async () => {
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
        const data = await response.json();

        setCookie("jwtToken", data.token, { path: "/" });
        setCookie("refreshToken", data.refreshToken, { path: "/" });
        setCookie("userId", data.userId, { path: "/" });

        const userDetailsResponse = await fetch(
          `${Api_Endpoints.getUserById}${data.userId}`,
          {
            headers: {
              Authorization: `Bearer ${data.token}`,
            },
          }
        );

        if (userDetailsResponse.ok) {
          const userDetails = await userDetailsResponse.json();

          localStorage.setItem("userName", userDetails.userName);
          localStorage.setItem("roles", JSON.stringify(userDetails.roles));
          window.location.reload();
          onLoginSuccess();
        } else {
          console.error("Failed to fetch user details");
        }
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
