import { useState, useCallback } from "react";
import { Api_Endpoints } from "../services/ApiBaseLink";

const useRegisterToTournament = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUsername = () => {
    return localStorage.getItem("userName");
  };

  const registerToEvent = useCallback(async (tournamentId) => {
    setIsLoading(true);
    setError(null);

    try {
      const username = getUsername();
      const response = await fetch(Api_Endpoints.postAddUserToTournament, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tournamentId,
          username,
        }),
      });

      if (!response.ok) {
        setError("Failed to register for the event");
        return;
      }

      if (response.status === 200) {
        console.log("Successfully registered for the event!");
      }

    } catch (error) {
      console.error("Error registering for event:", error);
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    registerToEvent,
    isLoading,
    error,
  };
};

export default useRegisterToTournament;
