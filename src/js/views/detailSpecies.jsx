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
      <h5 className="card-title">{store.speciesId?.properties?.name}</h5>
        <p className="card-text">
        <p className="card-text">Classification: <span className="text-warning">{store.speciesId?.properties?.classification}</span> </p>
        <p className="card-text">Designation: <span className="text-warning">{store.speciesId?.properties?.designation}</span></p>
        <p className="card-text">Language: <span className="text-warning">{store.speciesId?.properties?.language}</span></p>
        <p className="card-text">Average Lifespan: <span className="text-warning">{store.speciesId?.properties?.average_lifespan}</span></p>
        <p className="card-text">Average Height: <span className="text-warning">{store.speciesId?.properties?.average_height}</span></p>
        <p className="card-text">Skin colors: <span className="text-warning">{store.speciesId?.properties?.skin_colors}</span></p>
          </p>
        <Link to="/" className="btn btn-warning">
          Go back
        </Link>
      </div>
    </div>
  );
};