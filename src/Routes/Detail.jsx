import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentist, setDentist] = useState({});
  const params = useParams();
  console.log(params);
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;
  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setDentist(res.data);
    });
  }, []);
  return (
    <>
      <h1>{"Detail Dentist " + `${dentist.id}` }</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Telefono</th>
          <th>Website</th>
        </tr>
        <tr>
          <td>{dentist.name}</td>
          <td>{dentist.email}</td>
          <th>{dentist.phone}</th>
          <th>{dentist.website}</th>
        </tr>
        
      </table>
      {/*<div className='table'>
        {dentist && (
          <>
            <h3>Nombre</h3>
            <h4>{dentist.name}</h4>
            <h3>Email</h3>
            <h4>{dentist.email}</h4>
            <h3>Telefono</h3>
            <h4>{dentist.phone}</h4>
            <h3>Website</h3>
            <h4>{dentist.website}</h4>
          </>
        )}
      </div>*/}
    </>
  )
}

export default Detail