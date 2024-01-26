const Base_Url = "https://localhost:7099/api/";

const Api_Endpoints = {
  //Auth
  postRegister: `${Base_Url}"Auth/register"`,
  postLogin: "Auth/Login",
  postRefreshToken: "Auth/RefreshToken",

  //Duel
  getAllDuels: "Duel/AllDuels",
  getDuelById: "Duel/{id}",
  deleteDuel: "Duel/DeleteDuel",
  updateDuel: "Duel/UpdateDuel",

  //Invitation

  //Tournament
  getAllTournaments: `${Base_Url}Tournament/AllTournaments`,
  
}

export {Base_Url, Api_Endpoints};