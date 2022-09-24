import React from "react";
import "../../styles/home.css";
import { CharactersCards } from "../component/charactersCards.jsx";
import { PlanetCards } from "../component/planetCards.jsx";
import { VehiclesCards } from "../component/vehiclesCards.jsx";
import { StarshipsCards } from "../component/starshipsCards.jsx";
import { SpeciesCards } from "../component/speciesCards.jsx";

export const Home = () => (
  <>
    <h1 className="text-warning ms-4"> Characters </h1>
    <div className="container">
      <div className="row flex-nowrap">
        <CharactersCards />
      </div>
    </div>
    <h1 className="text-warning ms-4"> Planets </h1>
    <div className="container">
      <div className="row flex-nowrap">
        <PlanetCards />
      </div>
    </div>
    <h1 className="text-warning ms-4"> Vehicles </h1>
    <div className="container">
      <div className="row flex-nowrap">
        <VehiclesCards />
      </div>
    </div>
    <h1 className="text-warning ms-4"> Starships</h1>
    <div className="container">
      <div className="row flex-nowrap">
        <StarshipsCards />
      </div>
    </div>
    <h1 className="text-warning ms-4"> Species </h1>
    <div className="container">
      <div className="row flex-nowrap">
        <SpeciesCards />
      </div>
    </div>
  </>
);
