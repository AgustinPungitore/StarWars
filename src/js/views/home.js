import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CharactersCards } from "../component/charactersCards.jsx";
import { PlanetCards } from "../component/planetCards.jsx";

export const Home = () => (
  <div className="row row-cols-1 row-cols-md-3 g-4">
    <CharactersCards />
    <CharactersCards />
    <CharactersCards />
    <CharactersCards />
	<br />
	<br />
	<PlanetCards />
	<PlanetCards />
	<PlanetCards />
	<PlanetCards />
  </div>
);
