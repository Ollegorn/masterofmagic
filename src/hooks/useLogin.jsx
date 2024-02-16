import { useState } from "react";
import { Api_Endpoints } from "../services/ApiBaseLink";
import { useCookies } from "react-cookie";
import sha256 from 'crypto-js/sha256';

const useLogin = (onLoginSuccess) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [cookies, setCookie] = useCookies(["jwtToken", "refreshToken"]);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState("");

  const handleChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const hashedPassword = sha256(formData.password).toString();

      const encryptedFormData = {
        ...formData,
        password: hashedPassword,
      };
      const response = await fetch(Api_Endpoints.postLogin, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(encryptedFormData),
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
          setLoginError(null);
          onLoginSuccess();
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        } else {
          console.error("Failed to fetch user details");
        }
      } else {
        const errorData = await response.json();
        setErrors({
          email: errorData.email || "",
          password: errorData.password || "",
        });
        setLoginError("Incorrect email or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setLoginError("An error occurred during login");
    }
  };

  const handleSubmitFromSignup = async (formDataLogin) => {
    try {
      const hashedPassword = sha256(formDataLogin.password).toString();

      const encryptedFormData = {
        ...formDataLogin,
        password: hashedPassword,
      };
      const response = await fetch(Api_Endpoints.postLogin, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(encryptedFormData),
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
          setLoginError(null);
          onLoginSuccess();
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        } else {
          console.error("Failed to fetch user details");
        }
      } else {
        const errorData = await response.json();
        setErrors({
          email: errorData.email || "",
          password: errorData.password || "",
        });
        setLoginError("Incorrect email or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setLoginError("An error occurred during login");
    }
  };

  return {
    formData,
    errors,
    loginError,
    handleChange,
    handleSubmit,
    handleSubmitFromSignup
  };
};

export default useLogin;
