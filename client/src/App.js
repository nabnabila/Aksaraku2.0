import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes, Router } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import AksaraNglegena from "./Pages/AksaraNglegena";
import PasanganAksaraNglegena from "./Pages/PasanganAksaraNglegena";
import AksaraMurda from "./Pages/AksaraMurda";
import PasanganAksaraMurda from "./Pages/PasanganAksaraMurda";
import Sandhangan from "./Pages/Sandhangan";
import Games from "./Pages/Kuis";
import Belajar1 from "./Pages/Belajar1";
import Belajar2 from "./Pages/Belajar2";
import Belajar3 from "./Pages/Belajar3";
import Belajar4 from "./Pages/Belajar4";
import Belajar5 from "./Pages/Belajar5";
import Kuis1 from "./Pages/Kuis1";
import Kuis2 from "./Pages/Kuis2";
import Kuis3 from "./Pages/Kuis3";
import Kuis4 from "./Pages/Kuis4";
import Kuis5 from "./Pages/Kuis5";
import IsiKuis1A from "./Pages/Nggolekitembang/Nt1";
import IsiKuis1B from "./Pages/Nggolekitembang/Nt3";
import IsiKuis1C from "./Pages/Nggolekitembang/Nt2";
import IsiKuis1D from "./Pages/Nggolekitembang/Nt4";
import IsiKuis1E from "./Pages/Nggolekitembang/Nt5";
import IsiKuis2A from "./Pages/Ngaturukara/Nu1";
import IsiKuis2C from "./Pages/Ngaturukara/Nu4";
import IsiKuis2B from "./Pages/Ngaturukara/Nu3";
import IsiKuis2D from "./Pages/Ngaturukara/Nu5";
import IsiKuis2E from "./Pages/Ngaturukara/Nu2";
import IsiKuis3A from "./Pages/Memory/M1";
import IsiKuis3B from "./Pages/Memory/M3";
import IsiKuis3C from "./Pages/Memory/M4";
import IsiKuis3D from "./Pages/Memory/M5";
import IsiKuis3E from "./Pages/Memory/M2";
import IsiKuis4A from "./Pages/Gambar/G1";
import IsiKuis4B from "./Pages/Gambar/G3";
import IsiKuis4C from "./Pages/Gambar/G4";
import IsiKuis4D from "./Pages/Gambar/G5";
import IsiKuis4E from "./Pages/Gambar/G2";
import IsiKuis5A from "./Pages/Swara/S1";
import IsiKuis5B from "./Pages/Swara/S3";
import IsiKuis5C from "./Pages/Swara/S4";
import IsiKuis5D from "./Pages/Swara/S5";
import IsiKuis5E from "./Pages/Swara/S2";
import firstpage from "./Pages/firstpage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={firstpage} />
        <Route path="/homepage" Component={HomePage} />
        <Route path="/aksaranglegena" Component={AksaraNglegena} />
        <Route
          path="/pasanganaksaranglegena"
          Component={PasanganAksaraNglegena}
        />
        <Route path="/aksaramurda" Component={AksaraMurda} />
        <Route path="/pasanganaksaramurda" Component={PasanganAksaraMurda} />
        <Route path="/sandhangan1" Component={Sandhangan} />
        <Route path="/games" Component={Games} />
        <Route path="/belajar1" Component={Belajar1} />
        <Route path="/aksaranglegena/belajar1" Component={Belajar1} />
        <Route path="/pasanganaksaranglegena/belajar2" Component={Belajar2} />
        <Route path="/aksaramurda/belajar3" Component={Belajar3} />
        <Route path="/pasanganaksaramurda/belajar4" Component={Belajar4} />
        <Route path="/sandhangan/belajar5" Component={Belajar5} />
        <Route path="/games/nggolekitembung" Component={Kuis1} />
        <Route path="/games/ngaturukara" Component={Kuis2} />
        <Route path="/games/memory" Component={Kuis3} />
        <Route path="/games/gambar" Component={Kuis4} />
        <Route path="/games/swara" Component={Kuis5} />
        <Route path="/games/nggolekitembung/1" Component={IsiKuis1A} />
        <Route path="/games/nggolekitembung/2" Component={IsiKuis1B} />
        <Route path="/games/nggolekitembung/3" Component={IsiKuis1C} />
        <Route path="/games/nggolekitembung/4" Component={IsiKuis1D} />
        <Route path="/games/nggolekitembung/5" Component={IsiKuis1E} />
        <Route path="/games/ngaturukara/1" Component={IsiKuis2A} />
        <Route path="/games/ngaturukara/2" Component={IsiKuis2E} />
        <Route path="/games/ngaturukara/3" Component={IsiKuis2B} />
        <Route path="/games/ngaturukara/4" Component={IsiKuis2C} />
        <Route path="/games/ngaturukara/5" Component={IsiKuis2D} />
        <Route path="/games/memory/1" Component={IsiKuis3A} />
        <Route path="/games/memory/2" Component={IsiKuis3E} />
        <Route path="/games/memory/3" Component={IsiKuis3B} />
        <Route path="/games/memory/4" Component={IsiKuis3C} />
        <Route path="/games/memory/5" Component={IsiKuis3D} />
        <Route path="/games/gambar/1" Component={IsiKuis4A} />
        <Route path="/games/gambar/2" Component={IsiKuis4E} />
        <Route path="/games/gambar/3" Component={IsiKuis4B} />
        <Route path="/games/gambar/4" Component={IsiKuis4C} />
        <Route path="/games/gambar/5" Component={IsiKuis4D} />
        <Route path="/games/swara/1" Component={IsiKuis5A} />
        <Route path="/games/swara/2" Component={IsiKuis5E} />
        <Route path="/games/swara/3" Component={IsiKuis5B} />
        <Route path="/games/swara/4" Component={IsiKuis5C} />
        <Route path="/games/swara/5" Component={IsiKuis5D} />
      </Routes>
    </div>
  );
}

export default App;
