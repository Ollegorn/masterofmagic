// useAuth.js

import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Api_Endpoints } from "../services/ApiBaseLink";

const useAuth = (userId) => {
  const [cookies] = useCookies(["jwtToken"]);
  const { jwtToken } = cookies;
  const isAuthenticated = !!jwtToken;

  const fetchUserDetails = async () => {
    try {
      const response = await fetch(`${Api_Endpoints.getUserById}${userId}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      if (response.ok) {
        const userDetails = await response.json();
        console.log("User Details:", userDetails);
      } else {
        console.error("Failed to fetch user details");
      }
    } catch (error) {
      console.error("Error during user details fetch:", error);
    }
  };

  useEffect(() => {
    if (isAuthenticated && userId) {
      fetchUserDetails();
    }
  }, [isAuthenticated, userId, jwtToken]);

  return {
    isAuthenticated,
    userId,
    fetchUserDetails,
  };
};

export default useAuth;
