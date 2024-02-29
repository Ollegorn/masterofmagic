import { useState } from 'react';
import { Api_Endpoints } from "../services/ApiBaseLink";

const useDuel = () => {
  const [error, setError] = useState(null);

  const updateDuel = async (duelId, userOneWins=0, userOneDefeats=0, isCompleted) => {
    if (userOneWins === userOneDefeats) {
      throw new Error('userOneWins and userOneDefeats cannot be equal');
    }
    try {
      const response = await fetch(`${Api_Endpoints.updateDuel}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          duelId,
          userOneWins,
          userOneDefeats,
          isCompleted,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update duel');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return { updateDuel, error };
};

export default useDuel;