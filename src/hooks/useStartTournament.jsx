import { useState, useCallback } from 'react';
import { Api_Endpoints } from '../services/ApiBaseLink';

const useStartTournament = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const startTournament = useCallback(async (tournamentId) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${Api_Endpoints.postStartTournament}${tournamentId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        setError('Failed to start the tournament');
        return;
      }

      if (response.status === 200) {
        console.log('Tournament started successfully!');
        // You can handle additional logic upon successful start if needed
      }

    } catch (error) {
      console.error('Error starting tournament:', error);
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    startTournament,
    isLoading,
    error,
  };
};

export default useStartTournament;
