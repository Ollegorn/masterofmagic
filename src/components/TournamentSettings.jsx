import React, { useState, useEffect } from 'react';
import Title from './Title';
import InputField from './InputField';
import ImagesGrid from './ImagesGrid';
import ToggleInput from './ToggleInput';
import OptionSwitch from './OptionSwitch';
import Button from './Button';
import Error from './Error';
import useUpdateTournament from '../hooks/useUpdateTournament';
import useStartTournament from '../hooks/useStartTournament';
import useDeleteTournament from '../hooks/useDeleteTournament';

function TournamentSettings({ tournamentData, registerToEventConfirmationMessage, deleteTournamentConfirmationMessage, startTournamentConfirmationMessage }) {
  const {
    formData,
    errors,
    setErrors,
    handleInputChange,
    handleImageSelect,
    handleToggleChange,
    handleDateChange,
    handleSubmit,
    setInitialData,
  } = useUpdateTournament(() => {
    console.log('Tournament updated successfully!');
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setInitialData(tournamentData);
  }, [tournamentData]);

  const handleTournamentNameChange = (e) => {
    handleInputChange("tournamentName", e.target.value);
    setErrors({ ...errors, tournamentName: "" });
  };

  const handleDescriptionChange = (e) => {
    handleInputChange("description", e.target.value);
    setErrors({ ...errors, description: "" });
  };

  const handleStartDateChange = (e) => {
    handleDateChange("startDate", e.target.value);
    setErrors({ ...errors, startDate: "" });
  };

  const handleEndDateChange = (e) => {
    handleDateChange("endDate", e.target.value);
    setErrors({ ...errors, endDate: "" });
  };

  const toggleSettings = () => {
    setIsOpen((prev) => !prev);
  }

  const handleRegisterToTournament = () => {
    registerToEventConfirmationMessage(tournamentData.tournamentId);
  };

  const handleStartTournament = () => {
    startTournamentConfirmationMessage(tournamentData.tournamentId);
  };

  const handleDeleteTournament = () => {
    deleteTournamentConfirmationMessage(tournamentData.tournamentId);
  };

  return (
    <>
      <div className="flex min-w-68 max-w-180 py-4 px-4 flex-col items-start mx-auto gap-8 ">
      
        <Button className="w-full h-14 mb-12" onClick={toggleSettings}>Edit Tournament</Button>
        <div className="h-px w-full rounded bg-gradient-to-r from-primary04-500 to-primary04-100"></div>
        {isOpen && (
          <>
            <div className='flex pt-4 flex-col items-start gap-4 self-stretch'>
            <Title>General Settings</Title>
            <InputField 
              label="Tournament Name" 
              placeholderText="Tournament Name"
              value={formData.title || tournamentData.title}
              onChange={handleTournamentNameChange}
            />
            {errors.tournamentName && <Error>{errors.tournamentName}</Error>}
            
            <div className="flex p-0 items-start gap-2 self-stretch">
              <div className="flex flex-col justify-center items-start gap-2 w-full">
                <label className="font-body text-base font-semibold text-Neutral-100 md:text-lg lg:text-xl xl:text-xl ">Start Date</label>
                <div className="flex items-center gap-2 self-stretch rounded-lg bg-Neutral-800 py-4 px-2 focus-within:bg-Neutral-700 focus-within:shadow-glow hover:bg-Neutral-700 hover:shadow-glow md:gap-3">
                  <input 
                    type="date" 
                    className="flex flex-1 items-center bg-transparent text-base text-gray-400 focus:outline-none md:text-lg lg:text-xl xl:text-2xl w-full"
                    value={formData.startDate || tournamentData.startDate}
                    onChange={handleStartDateChange}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-2 w-full">
                <label className="font-body text-base font-semibold text-Neutral-100 md:text-lg lg:text-xl xl:text-xl">End Date</label>
                <div className="flex items-center gap-2 self-stretch rounded-lg bg-Neutral-800 py-4 px-2 focus-within:bg-Neutral-700 focus-within:shadow-glow hover:bg-Neutral-700 hover:shadow-glow md:gap-3">
                  <input 
                    type="date" 
                    className="flex flex-1 items-center bg-transparent text-base text-gray-400 focus:outline-none md:text-lg lg:text-xl xl:text-2xl w-full"
                    value={formData.endDate || tournamentData.endDate}
                    onChange={handleEndDateChange}
                  />
                </div>
              </div>
            </div>
              {(errors.startDate || errors.endDate) && <Error>{errors.startDate}</Error>}

              <div className="flex flex-col justify-center items-start gap-2 w-full">
                <label className="font-body text-base font-semibold text-Neutral-100 md:text-lg lg:text-xl xl:text-xl">Description</label>
                <div className="flex items-center gap-2 self-stretch rounded-lg bg-Neutral-800 p-4 focus-within:bg-Neutral-700 focus-within:shadow-glow hover:bg-Neutral-700 hover:shadow-glow md:gap-3">
                  <textarea
                    placeholder="Describe the tournament."
                    className="flex flex-1 h-auto items-center bg-transparent text-base text-Neutral-50 focus:outline-none md:text-lg lg:text-xl xl:text-2xl resize-none w-full"
                    maxLength={150}
                    value={formData.description || tournamentData.description}
                    onChange={handleDescriptionChange}
                  />
                </div>
                {errors.description && <Error>{errors.description}</Error>}
              </div>
            </div>


          <div className="flex min-w-80 p-0 px-4 flex-col items-start gap-4">
            <div className='flex flex-col items-start gap-4 self-stretch'>
              <Title>Display Settings</Title>
              <p className="font-body text-base font-semibold text-Neutral-100 md:text-lg lg:text-xl xl:text-xl">Pick an image:</p>
              <ImagesGrid onSelect={handleImageSelect}/>
              <ToggleInput 
                label="Featured" 
                fieldName="isFeatured"
                onChange={handleToggleChange}
              />
            </div>
          </div>
          <div className="h-px w-full my-12 rounded bg-gradient-to-r from-primary04-500 to-primary04-100"></div>


          <div className="flex w-full min-w-80 p-0 px-4 flex-col items-start gap-4">
            <div className='flex flex-col items-start gap-4 self-stretch'>
              <Title>Tournament Format</Title>
              <OptionSwitch label="Format" option1="Round Robin" option2="Knockout"/>
              <OptionSwitch label="Duel Mode" option1="Solo" option2="Duo" />
            </div>
          </div>
          <div className="h-px w-full my-12 rounded bg-gradient-to-r from-primary04-500 to-primary04-100"></div>

          <div className="flex w-full min-w-80 p-0 px-4 flex-col items-start gap-4">
            <div className='flex flex-col items-start gap-4 self-stretch'>
              <Title>Dueling Room Setup</Title>
              <ToggleInput 
                label="Balanced Mode"
                fieldName="balancedMode"
                onChange={handleToggleChange} 
              />
              <ToggleInput 
                label="Echo Ban"
                fieldName="echoBan"
                onChange={handleToggleChange} 
              />
              <ToggleInput 
                label="Card Ban"
                fieldName="cardBan"
                onChange={handleToggleChange} 
              />
              <ToggleInput 
                label="Two Wins In Three Games"
                fieldName="twoWinsInThreeGames"
                onChange={handleToggleChange} 
              />
              <ToggleInput
                label="Rewards"
                fieldName="rewards" 
                onChange={handleToggleChange}
              />
            </div>
          </div>
          <div className="h-px w-full my-12 rounded bg-gradient-to-r from-primary04-500 to-primary04-100"></div>
          <Button className="w-full h-14 mb-12" >Submit Changes</Button>
        <div className="h-px w-full rounded bg-gradient-to-r from-primary04-500 to-primary04-100"></div>
          </>
        )}
        
        <Button className="w-full h-14 my-12" variant="secondary" onClick={handleRegisterToTournament} >Register To Tournament</Button>
        <div className="h-px w-full rounded bg-gradient-to-r from-primary04-500 to-primary04-100"></div>
        <Button className="w-full h-14 my-12" onClick={handleStartTournament}>Start Tournament</Button>
        <div className="h-px w-full rounded bg-gradient-to-r from-primary04-500 to-primary04-100"></div>
        <Button className="w-full h-14 my-12" onClick={handleDeleteTournament}>Delete Tournament</Button>

      </div>
    </>
  );
}

export default TournamentSettings;
