import { useState, useEffect } from 'react';
import { Api_Endpoints } from '../services/ApiBaseLink';

const useInvitations = () => {
  const [invitations, setInvitations] = useState([]);

  useEffect(() => {
    getAllInvitations();
  }, []);

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
      await fetch(`${Api_Endpoints.deleteInvitation}/${invitationId}`, {
        method: 'DELETE',
      });
      setInvitations(invitations.filter(invitation => invitation.id !== invitationId));
    } catch (error) {
      console.error('Error deleting invitation:', error);
    }
  };

  // Other CRUD operations can be implemented similarly

  return {
    invitations,
    getAllInvitations,
    addInvitation,
    deleteInvitation,
    // Other CRUD functions
  };
};

export default useInvitations;
