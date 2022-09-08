import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CharactersCards = () => {
  const { store, actions } = useContext(Context); // exactamente la misma para todo, a partir de esto puede consumir estados y funciones de flux.js
  return (
    <>
      {store.characters.map((item, i) => {
        return (
          <div className="container overflow">
            <div className="card" style={{ width: "24rem" }}>
              <img
                src="https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p>{item.gender}</p>
                <p>{item.hair_color}</p>
                <p>{item.eye_color}</p>
                <p className="card-text">{item.review}</p>
                <Link
                  to="/detailCharacters"
                  className="btn btn-primary float-start"
                >
                  Detalles del Personaje
                </Link>
                <a href="#" className="btn btn-outline-warning float-end">
                  💛
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
