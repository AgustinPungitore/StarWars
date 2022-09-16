import React from "react";
import "../../styles/home.css";
import { CharactersCards } from "../component/charactersCards.jsx";
import { PlanetCards } from "../component/planetCards.jsx";
import { VehiclesCards } from "../component/vehiclesCards.jsx"
import { StarshipsCards } from "../component/starshipsCards.jsx";
import { SpeciesCards } from "../component/speciesCards.jsx"

export const Home = () => (
  <>
    <div className="overflow-auto d-flex container-flex">
      <CharactersCards />
    </div>
    <div className="overflow-auto d-flex container-flex">
      <PlanetCards />
    </div>
    <div className="overflow-auto d-flex container-flex">
      <VehiclesCards />
    </div>
    <div className="overflow-auto d-flex container-flex">
      <StarshipsCards />
    </div>
    <div className="overflow-auto d-flex container-flex">
      <SpeciesCards />
    </div>
  </>
);
