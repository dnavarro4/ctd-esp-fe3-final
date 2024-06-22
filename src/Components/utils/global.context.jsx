import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

export const ContextGlobal = createContext();

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_LIST":
      return { ...state, list: action.payload };
      
    case "ADD_FAVS":
      return { ...state, favs: [...state.favs, action.payload] }; //[...prevState, item] <- Revisar linea comentada en Card.jsx
    //case "DELETE_CART":
    //  const filteredCart = state.cart.filter(
    //    (item) => item.id != action.payload
    //  );
    //  return { ...state, cart: filteredCart };
    case "TOGGLE_THEME": //Esto lo resuelven ustedes
      return {...state, theme: !state.theme};
    default:
      throw new Error("Error al modificar el estado");
  }
};

export const initialState = {
  theme: "false",
  list: [],
  favs: lsFavs,
};

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    axios(url)
      .then((res) => 
        dispatch({ type: "GET_LIST", payload: res.data })
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal);

