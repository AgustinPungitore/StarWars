import React, {useEffect, useContext} from "react";
import { Link, useParams} from "react-router-dom"; // sin useParams no tenes id
import { Context } from "../store/appContext";

export const DetailCharacters = () => {
  const { store, actions } = useContext(Context) // traemos el store y actions del flux
  const params = useParams()
  useEffect(() => {
    actions.getCharactersId(params.id)
  }, [])

  return (
    <div className="card" style={{width: "18rem"}}>
      <img src={`https://starwars-visualguide.com/assets/img/characters/${store.charactersId?.uid}.jpg`} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{store.charactersId?.properties?.name}</h5>
        <p className="card-text">
        <p className="card-text">Birth year: <span className="text-warning">{store.charactersId?.properties?.birth_year}</span> </p>
        <p className="card-text">Height: <span className="text-warning">{store.charactersId?.properties?.height}</span></p>
        <p className="card-text">Mass: <span className="text-warning">{store.charactersId?.properties?.mass}</span></p>
        <p className="card-text">Skin Color: <span className="text-warning">{store.charactersId?.properties?.skin_color}</span></p>
        <p className="card-text">Gender: <span className="text-warning">{store.charactersId?.properties?.gender}</span></p>
        <p className="card-text">Brief description: <span className="text-warning">{store.charactersId?.description}</span></p>
          </p>
        <Link to="/" className="btn btn-warning">
          Go back
        </Link>
      </div>
    </div>
  );
};

// traer el params como rosi en el video, llamar a store.actions y a context, cuando se ejecute usar el useffect