const Base_Url = "https://masterofmagicapi.azurewebsites.net/api/";

const Api_Endpoints = {
  //Auth
  postRegister: `${Base_Url}Auth/register`,
  postLogin: `${Base_Url}Auth/Login`,
  postRefreshToken: `${Base_Url}Auth/RefreshToken`,

  //Duel
  getAllDuels: `${Base_Url}Duel/AllDuels`,
  getDuelById: `${Base_Url}Duel/`, //takes id at the end 
  deleteDuel: `${Base_Url}Duel/DeleteDuel`,
  updateDuel: `${Base_Url}Duel/UpdateDuel`,

  //Invitation
  getAllInvitations: `${Base_Url}Invitation/AllInvitations`,
  postInvitation: `${Base_Url}Invitation/AddInvitation`,
  deleteInvitation: `${Base_Url}Invitation/DeleteInvitation`,
  returnInvitationToSender: `${Base_Url}Invitation/ReturnInvitationToSender`, //Post

  //Tournament
  getAllTournaments: `${Base_Url}Tournament/AllTournaments`,
  getTournamentById: `${Base_Url}Tournament/`, //takes id at the end 
  postTournament: `${Base_Url}Tournament/CreateTournament`,
  postAddUserToTournament: ` ${Base_Url}Tournament/AddUserToTournament`,
  postStartTournament: `${Base_Url}Tournament/StartTournament?tournamentId=`, //takes id at the end 
  deleteTournament: `${Base_Url}Tournament/DeleteTournament?id=`, //takes id at the end 

  //User
  getAllUsers: `${Base_Url}User/AllUsers`,
  getUserById: `${Base_Url}User/`, //takes id at the end 
  getUserRolesByUsername: `${Base_Url}Setup/GetUserRoles`,
}

export {Base_Url, Api_Endpoints};