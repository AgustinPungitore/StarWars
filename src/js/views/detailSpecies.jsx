import React, {useEffect, useContext} from "react";
import { Link, useParams} from "react-router-dom"; // sin useParams no tenes id
import { Context } from "../store/appContext";

export const DetailSpecies = () => {
  const { store, actions } = useContext(Context) // traemos el store y actions del flux
  const params = useParams()
  useEffect(() => {
    actions.getSpeciesId(params.id)
  }, [])

  return (
    <div className="card" style={{width: "18rem"}}>
      <img src={`https://starwars-visualguide.com/assets/img/species/${store.speciesId?.uid}.jpg`} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{store.speciesId?.properties?.classification}</h5>
        <p className="card-text">
         
          </p>
        <Link to="/" className="btn btn-primary">
          Go back
        </Link>
      </div>
    </div>
  );
};