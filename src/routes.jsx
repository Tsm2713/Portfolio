import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import MonFutur from "./pages/MonFutur";
import MesProjets from "./pages/MesProjets";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/mon-futur" element={<MonFutur />} />
      <Route path="/mes-projets" element={<MesProjets />} />
    </Routes>
  );
}
