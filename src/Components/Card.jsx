import React from "react";
import { Link} from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";


const Card = ({ item }) => {
  const { name, username} = item;
  const { dispatch } = useContextGlobal();
  

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({ type: "ADD_FAVS", payload: item })
    alert("Dentista agregado correctamente");
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
        <img src="/public/images/doctor.jpg" alt={name} className="cardImg"/>
        <Link to={"/dentist/" + item.id}><h4>{name}</h4></Link>
        <h4>{username}</h4>
        {location.pathname == "/" && (
        <button onClick={addFav} className="favButton">⭐ADD FAV</button>
        )
      }
    </div>
  );
};

export default Card;
