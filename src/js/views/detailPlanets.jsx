import React, {useEffect, useContext} from "react";
import { Link, useParams} from "react-router-dom"; // sin useParams no tenes id
import { Context } from "../store/appContext";

export const DetailPlanets = () => {
  const { store, actions } = useContext(Context) // traemos el store y actions del flux
  const params = useParams()
  useEffect(() => {
    actions.getPlanetsId(params.id)
  }, [])

  return (
    <div className="card" style={{width: "18rem"}}>
      <img src={`https://starwars-visualguide.com/assets/img/planets/${store.planetsId?.uid}.jpg`} className="card-img-top" alt="..." />
      <div className="card-body">
      <h5 className="card-title">{store.charactersId?.properties?.name}</h5>
        <p className="card-text">
        <p className="card-text">Gravity: <span className="text-warning">{store.planetsId?.properties?.gravity}</span> </p>
        <p className="card-text">Climate: <span className="text-warning">{store.planetsId?.properties?.climate}</span></p>
        <p className="card-text">Population: <span className="text-warning">{store.planetsId?.properties?.population}</span></p>
        <p className="card-text">Terrain: <span className="text-warning">{store.planetsId?.properties?.terrain}</span></p>
        <p className="card-text">Diameter: <span className="text-warning">{store.planetsId?.properties?.diameter}</span></p>
        <p className="card-text">Orbital Period: <span className="text-warning">{store.planetsId?.properties?.orbital_period}</span></p>
          </p>
        <Link to="/" className="btn btn-primary">
          Go back
        </Link>
      </div>
    </div>
  );
};