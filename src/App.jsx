import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TournamentHub from "./pages/TournamentHub";
import DuelistZone from "./pages/DuelistZone";
import Leaderboard from "./pages/Leaderboard";
import Rules from "./pages/Rules";
import Account from "./pages/Account";
import FAQ from "./pages/FAQ";
import Support from "./pages/Support";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="tournament_hub/" element={<TournamentHub />} />
      <Route path="duelist_zone/" element={<DuelistZone />} />
      <Route path="leaderboard/" element={<Leaderboard />} />
      <Route path="rules" element={<Rules />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="support" element={<Support />} />
      <Route path="account" element={<Account />} />
    </Route>,
  ),
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
