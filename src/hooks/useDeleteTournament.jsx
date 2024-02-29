import { useState, useCallback } from 'react';
import { Api_Endpoints } from '../services/ApiBaseLink';
import { useCookies } from 'react-cookie';

const useDeleteTournament = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cookies] = useCookies(['jwtToken', 'refreshToken']);

  const deleteTournament = useCallback(async (tournamentId) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${Api_Endpoints.deleteTournament}${tournamentId}`, {
        method: 'DELETE',
        headers: {
          'Accept': '*/*',
          'Authorization': `Bearer ${cookies.jwtToken}`,
          'RefreshToken': cookies.refreshToken,
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
  }, [cookies.jwtToken, cookies.refreshToken]);

  return {
    deleteTournament,
    isLoading,
    error,
  };
};

export default useDeleteTournament;
