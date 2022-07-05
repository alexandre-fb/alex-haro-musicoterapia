import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./home";
import { MusicoterapiaPage } from "./servicos/musicoterapia";
import { AulasDeMusicaPage } from "./servicos/aulas-de-musica";
import { PalestrasPage } from "./servicos/palestras";
import { ContactPage } from "./contact";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/musicoterapia" element={<MusicoterapiaPage />} />
        <Route path="/aulas-de-musica" element={<AulasDeMusicaPage />} />
        <Route path="/palestras" element={<PalestrasPage />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};
