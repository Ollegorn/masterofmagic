const Base_Url = "https://masterofmagicapi.azurewebsites.net/api/";

const Api_Endpoints = {
  //Auth
  postRegister: `${Base_Url}Auth/register`,
  postLogin: `${Base_Url}Auth/Login`,
  postRefreshToken: `${Base_Url}Auth/RefreshToken`,

  //Duel
  getAllDuels: `${Base_Url}Duel/AllDuels`,
  getDuelById: `${Base_Url}Duel/`, //takes id at the end Duel/{id}
  deleteDuel: `${Base_Url}Duel/DeleteDuel`,
  updateDuel: `${Base_Url}Duel/UpdateDuel`,

  //Invitation
  getAllInvitations: `${Base_Url}Invitation/AllInvitations`,
  postInvitation: `${Base_Url}Invitation/AddInvitation`,
  deleteInvitation: `${Base_Url}Invitation/DeleteInvitation`,
  returnInvitationToSender: `${Base_Url}Invitation/ReturnInvitationToSender`, //Post

  //Tournament
  getAllTournaments: `${Base_Url}Tournament/AllTournaments`,
  getTournamentById: `${Base_Url}Tournament/`, //takes id at the end Duel/{id}

  
}

export {Base_Url, Api_Endpoints};