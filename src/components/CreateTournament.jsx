import React, { useState, useEffect } from 'react';
import Title from './Title';
import InputField from './InputField';
import ImagesGrid from './ImagesGrid';
import ToggleInput from './ToggleInput';
import OptionSwitch from './OptionSwitch';
import Button from './Button';
import Error from './Error';
import useCreateTournament from '../hooks/useCreateTournament';
import NotificationPopup from './NotificationPopup';

function CreateTournament() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState('');

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  const handleCreateSuccess = () => {
    setShowNotification(true);
    setNotificationType('success');
    setNotificationMessage('Tournament created successfully!');
  };

  const handleCreateError = () => {
    setShowNotification(true);
    setNotificationType('error');
    setNotificationMessage("Something went wrong...");
  };

  const {
    tournamentData,
    errors,
    handleInputChange,
    handleImageSelect,
    handleToggleChange,
    handleDateChange,
    handleSubmit,
  } = useCreateTournament(handleCreateSuccess, handleCreateError);

  return (
    <>
      <div className="flex min-w-68 max-w-180 py-4 px-2 flex-col items-start mx-auto gap-8 ">
        <div className='flex pt-4 flex-col items-start gap-4 self-stretch'>
          <Title>General Settings</Title>
          <InputField 
            label="Tournament Name" 
            placeholderText="Tournament Name"
            value={tournamentData.tournamentName}
            onChange={(e) => handleInputChange("tournamentName", e.target.value)}
          />
          {errors.tournamentName && <Error>{errors.tournamentName}</Error>}
          <div className="flex p-0 items-start gap-2 self-stretch">
            <div className="flex flex-col justify-center items-start gap-2 w-full">
              <label className="font-body text-base font-semibold text-Neutral-100 md:text-lg lg:text-xl xl:text-xl ">Start Date</label>
              <div className="flex items-center gap-2 self-stretch rounded-lg bg-Neutral-800 py-4 px-2 focus-within:bg-Neutral-700 focus-within:shadow-glow hover:bg-Neutral-700 hover:shadow-glow md:gap-3">
                <input 
                  type="date" 
                  className="flex flex-1 items-center bg-transparent text-base text-gray-400 focus:outline-none md:text-lg lg:text-xl xl:text-2xl w-full"
                  value={tournamentData.startDate}
                  onChange={(e) => handleDateChange("startDate", e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-start gap-2 w-full">
              <label className="font-body text-base font-semibold text-Neutral-100 md:text-lg lg:text-xl xl:text-xl">End Date</label>
              <div className="flex items-center gap-2 self-stretch rounded-lg bg-Neutral-800 py-4 px-2 focus-within:bg-Neutral-700 focus-within:shadow-glow hover:bg-Neutral-700 hover:shadow-glow md:gap-3">
                <input 
                  type="date" 
                  className="flex flex-1 items-center bg-transparent text-base text-gray-400 focus:outline-none md:text-lg lg:text-xl xl:text-2xl w-full"
                  value={tournamentData.endDate}
                  onChange={(e) => handleDateChange("endDate", e.target.value)}
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
                value={tournamentData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
              />
            </div>
            {errors.description && <Error>{errors.description}</Error>}
          </div>
        </div>
          <div className="h-px w-full my-12 rounded bg-gradient-to-r from-primary04-500 to-primary04-100"></div>


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
         <Button className="w-full h-14" onClick={handleSubmit}>Create Tournament</Button>

        {showNotification && (
          <NotificationPopup
            message={notificationMessage}
            variant={notificationType}
            onClose={() => setShowNotification(false)}
          />
        )}
      </div>
    </>
  );
}

export default CreateTournament;
