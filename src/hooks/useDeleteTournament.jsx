import { useState, useCallback } from 'react';
import { Api_Endpoints } from '../services/ApiBaseLink';

const useDeleteTournament = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteTournament = useCallback(async (tournamentId) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${Api_Endpoints.deleteTournament}${tournamentId}`, {
        method: 'DELETE',
        headers: {
          'Accept': '*/*',
        },
      });

      if (!response.ok) {
        setError('Failed to delete the tournament');
        return;
      }

      if (response.status === 200) {
        console.log('Successfully deleted the tournament!');
      }
    } catch (error) {
      console.error('Error deleting tournament:', error);
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    deleteTournament,
    isLoading,
    error,
  };
};

export default useDeleteTournament;
