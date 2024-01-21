const Base_Url = "https://localhost:7099/api/";

const Api_Endpoints = {
  //Auth
  postRegister: "Auth/register",
  postLogin: "Auth/Login",
  postRefreshToken: "Auth/RefreshToken",

  //Duel
  getAllDuels: "Duel/AllDuels",
  getDuelById: "Duel/{id}",
  deleteDuel: "Duel/DeleteDuel",
  updateDuel: "Duel/UpdateDuel",

  //Invitation

  //Tournament
  getAllTournaments: "Tournament/AllTournaments",
  
}

export {Base_Url, Api_Endpoints};