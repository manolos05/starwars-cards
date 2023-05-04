import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import { People } from "./views/People";
import Planets from "./views/Planets";
import { Starship } from "./views/Starship";
import { Films } from "./views/Films";
import { PlanetCards } from "./views/PlanetCard";
import { FilmCards } from "./views/FilmsCard";
import StarshipCard from "./views/StarShipsCards";
import { PeopleCard } from "./views/PeopleCard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Planets />} path="/Planets" />
          <Route element={<PlanetCards />} path="/Planets/:id" />
          <Route element={<Starship />} path="/Starship" />
          <Route element={<StarshipCard />} path="/Starship/:id" />
          <Route element={<Films />} path="/Films" />
          <Route element={<FilmCards />} path="/Films/:id" />
          <Route element={<People />} path="/People" />
          <Route element={<PeopleCard />} path="/People/:id" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
