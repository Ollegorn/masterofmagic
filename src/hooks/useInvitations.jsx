import { useState, useEffect } from 'react';
import { Api_Endpoints } from '../services/ApiBaseLink';

const useInvitations = () => {
  const [invitations, setInvitations] = useState([]);


  const getAllInvitations = async () => {
    try {
      const response = await fetch(Api_Endpoints.getAllInvitations);
      const data = await response.json();
      setInvitations(data);
    } catch (error) {
      console.error('Error fetching invitations:', error);
    }
  };

  const addInvitation = async (invitationData) => {
    try {
      const response = await fetch(Api_Endpoints.postInvitation, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(invitationData),
      });
      const newInvitation = await response.json();
      setInvitations([...invitations, newInvitation]);
    } catch (error) {
      console.error('Error adding invitation:', error);
    }
  };

  const deleteInvitation = async (invitationId) => {
    try {
      await fetch(`${Api_Endpoints.deleteInvitation}${invitationId}`, {
        method: 'DELETE',
        headers: {
          'accept': '*/*'
        },
      });
      setInvitations(invitations.filter(invitation => invitation.id !== invitationId));
    } catch (error) {
      console.error('Error deleting invitation:', error);
    }
  };

  const acceptInvitation = async (invitationId) => {
    try {
      await fetch(Api_Endpoints.postAcceptInvitation, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: invitationId,
          message: "",
          isAccepted: true,
        }),
      });
    } catch (error) {
      console.error('Error accepting invitation:', error);
    }
  };

  const returnInvitationToSender = async (requestBody) => {
    try {
      await fetch(Api_Endpoints.returnInvitationToSender, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
    } catch (error) {
      console.error('Error returning invitation to sender:', error);
      throw error;
    }
  };

  const cancelInvitation = async (invitationId, duelId) => {
    try {
      await fetch(Api_Endpoints.postAcceptInvitation, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: invitationId,
          duelId: duelId,
          message: "",
          isAccepted: true,
          isDeclined: true
        }),
      });
    } catch (error) {
      console.error('Error accepting invitation:', error);
    }
  }

  return {
    invitations,
    getAllInvitations,
    addInvitation,
    deleteInvitation,
    acceptInvitation,
    returnInvitationToSender,
    cancelInvitation
  };
};

export default useInvitations;
