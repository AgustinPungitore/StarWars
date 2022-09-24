import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const VehiclesCards = () => {
  const { store, actions } = useContext(Context); // exactamente la misma para todo, a partir de esto puede consumir estados y funciones de flux.js
  return (
    <>
      {store.vehicles.map((item, i) => {
        return (
            <div className="card card m-2 text-start bg-dark text-light" style={{ width: "20rem" }}>
              <img
                src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <Link
                  to={"/detailVehicles/" + item.uid}
                  className="btn btn-primary float-start"
                >
                 More info
                </Link>
                <a href="#" onClick={()=>{actions.addFavorites(item.name)}} className="btn btn-outline-warning float-end">
                  💛
                </a>
              </div>
            </div>
        );
      })}
    </>
  );
};