import React, {useEffect, useContext} from "react";
import { Link, useParams} from "react-router-dom"; // sin useParams no tenes id
import { Context } from "../store/appContext";

export const DetailVehicles = () => {
  const { store, actions } = useContext(Context) // traemos el store y actions del flux
  const params = useParams()
  useEffect(() => {
    actions.getVehiclesId(params.id)
  }, [])

  return (
    <div className="card" style={{width: "18rem"}}>
      <img src={`https://starwars-visualguide.com/assets/img/vehicles/${store.vehiclesId?.uid}.jpg`} className="card-img-top" alt="..." />
      <div className="card-body">
      <h5 className="card-title">{store.starshipsId?.properties?.name}</h5>
        <p className="card-text">
        <p className="card-text">Model: <span className="text-warning">{store.vehiclesId?.properties?.model}</span> </p>
        <p className="card-text">Manufacturer: <span className="text-warning">{store.vehiclessId?.properties?.manufacturer}</span></p>
        <p className="card-text">Cost in credits: <span className="text-warning">{store.vehiclesId?.properties?.cost_in_credits}</span></p>
        <p className="card-text">Crew: <span className="text-warning">{store.vehiclesId?.properties?.crew}</span></p>
        <p className="card-text">Passengers: <span className="text-warning">{store.vehiclesId?.properties?.passengers}</span></p>
        <p className="card-text">Max atmosphering speed: <span className="text-warning">{store.vehiclesId?.properties?.max_atmosphering_speed}</span></p>
          </p>
        <Link to="/" className="btn btn-primary">
          Go back
        </Link>
      </div>
    </div>
  );
};