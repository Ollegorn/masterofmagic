import { useState } from 'react';
import { Api_Endpoints } from '../services/ApiBaseLink';

const useCreateTournament = (onCreateSuccess) => {
  const [tournamentData, setTournamentData] = useState({
    tournamentName: '',
    imageNumber: 0,
    description: '',
    rules: [''],
    prize: '',
    startDate: '',
    endDate: '',
    format: 'Round Robin',
    duelMode: 'Solo',
    balancedMode: false,
    echoBan: false,
    cardBan: false,
    twoWinsInThreeGames: false,
    rewards: false,
  });

  const [errors, setErrors] = useState({
    tournamentName: '',
    startDate: '',
    endDate: '',
    description: '',

  })

  const handleInputChange = (fieldName, value) => {
    setTournamentData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleImageSelect = (imageNumber) => {
    setTournamentData((prevData) => ({
      ...prevData,
      imageNumber: imageNumber,
    }));
  };

  const handleToggleChange = (fieldName, isChecked) => {
    setTournamentData((prevData) => ({
      ...prevData,
      [fieldName]: isChecked,
    }));
  };

  const handleDateChange = (fieldName, date) => {
    setTournamentData((prevData) => ({
      ...prevData,
      [fieldName]: date,
    }));
  };

  const setFieldError = (fieldName, error) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: error,
    }));
  };
  
  const validateTournament = () => {
    const newErrors = {};

    if (!tournamentData.tournamentName){
      newErrors.tournamentName = "Tournament name is required";
    }
    if (!tournamentData.startDate || !tournamentData.endDate){
      newErrors.startDate = "Both dates are required";
    }
    if (tournamentData.startDate > tournamentData.endDate){
      newErrors.startDate = "End date can't be earlier than Start date";
    }
    if (!tournamentData.description){
      newErrors.description = "Description is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = async () => {
    const isTournamentValid = validateTournament();

    if (!isTournamentValid){
      console.log("Tournament not valid");
      return;
    }

    try {
      console.log(tournamentData);
      const response = await fetch(Api_Endpoints.postTournament, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tournamentData),
      });

      if (response.ok) {
        onCreateSuccess();
      } else {
        console.error('Tournament creation failed');
      }
    } catch (error) {
      console.error('Error during tournament creation:', error);
    }
  };

  return {
    tournamentData,
    errors,
    handleInputChange,
    handleImageSelect,
    handleToggleChange,
    handleDateChange,
    handleSubmit,
    setErrors: setFieldError,
  };
};

export default useCreateTournament;
