import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {Context} from "../store/appContext"

export const Navbar = () => {
  const {store, actions} = useContext(Context)

  return (
    <nav className="navbar navbar-light bg-dark mb-3">
      <Link to="/">
	  <span className="navbar-brand ms-4 mb-0 h1"> </span>
      </Link>
      <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites
  </button>
  <ul className="dropdown-menu">
	{store.favorites.map( (item, index) => {return <li className="bg-dark" key={index}><a className="dropdown-item bg-dark text-light" href="#">{item}<button onClick={()=> {actions.deleteFavorites(item)} } className="btn-secondary float-end">🗑️</button></a></li>} )}
    
  </ul>
</div>
    </nav>
  );
};
