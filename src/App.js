import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import { Cards } from "./components/Cards";
import { People } from "./views/People";

function App() {
  return (
    <>
      <NavBar />
      <div className="row">
        <People />
      </div>
    </>
  );
}

export default App;
