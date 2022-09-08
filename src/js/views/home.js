import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CharactersCards } from "../component/charactersCards.jsx";
import { PlanetCards } from "../component/planetCards.jsx";

export const Home = () => (
  <>
  <div className="overflow-auto d-flex container-flex">
    <CharactersCards />
    </div>
	<br />
	<br />
  <div className="overflow-auto d-flex container-flex">
	<PlanetCards />

  </div>
  </>
);
