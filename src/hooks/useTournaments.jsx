import { useState, useEffect } from "react";
import { Api_Endpoints } from "../services/ApiBaseLink";

export function useTournaments() {
  const [tournamentsData, setTournamentsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    getTournamentsData();
  },[])
  const getTournamentsData = async () => {
    try {
      const response = await fetch(`${Api_Endpoints.getAllTournaments}`);
      if (!response.ok) {
        throw new Error('Failed to fetch tournaments data');
      }
      const data = await response.json();
      setTournamentsData(data);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const ongoingTournaments = tournamentsData.filter(t => {
    const startDate = new Date(t.startDate);
    const endDate = new Date(t.endDate);
    const now = new Date();
    return startDate <= now && now <= endDate;
  });

  const upcomingTournaments = tournamentsData.filter(t => {
    const startDate = new Date(t.startDate);
    const now = new Date();
    return startDate > now;
  })

  const pastTournaments = tournamentsData.filter(t => {
    const endDate = new Date(t.endDate);
    const now = new Date();
    return endDate < now;
  })

  return {
    tournamentsData,
    getTournamentsData,
    loading,
    error,
    ongoingTournaments,
    upcomingTournaments,
    pastTournaments
  };
}
