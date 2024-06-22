
import { Link } from 'react-router-dom'
import NavbarStyles from "../Styles/Navbar.module.css"
import { useContextGlobal } from './utils/global.context';
import { useState } from 'react';
//console.log(NavbarStyles);

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {dispatch} = useContextGlobal();
  const {theme} = useContextGlobal();
  const [toggle, setToggle] = useState(false);

  const handleSwitch = () => {
    setToggle( prevToggle => !prevToggle )
    dispatch({type:"TOGGLE_THEME"})
  }

  //const handleTheme = () => {
  //  dispatch({type: "TOGGLE_THEME"})
  //}
  
  return (
    <div className={theme ? "dark" : "light"}>
    <div className={NavbarStyles.navContainer}>
      <h2>DH Odonto</h2>
      <nav>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <Link to="/"><h4>Home</h4></Link>
        <Link to= "/contact"><h4>Contact</h4></Link>
        <Link to="/favs"><h4>Favs</h4></Link>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={handleSwitch}>Change theme</button>
      </nav>
    </div>
    </div>
  )
}

export default Navbar