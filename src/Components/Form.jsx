import React, { useState } from "react";
import Message from "./Message";



const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [cliente, setCliente] = useState({
    nombre: "",
    email: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (event) =>
    setCliente({ ...cliente, nombre: event.target.value });
  const handleEmail = (e) =>
    setCliente({ ...cliente, email: e.target.value });

  const handleSumbit = (e) => {
    e.preventDefault();
    const validarEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (
      cliente.nombre.trim().length > 5 &&
      validarEmail.test (cliente.email) 
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow(false);
    }
  };
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <input type="text" value={cliente.nombre} onChange={handleName} placeholder="Nombre Completo" />
        
        <input
          type="email"
          value={cliente.email}
          onChange={handleEmail}
          placeholder="Email"
        />
        <button>Enviar</button>
      </form>
      {show && <Message cliente={cliente} />}
      {error && (
        <p style={{ color: "red" }}>
          **Por favor verifique su información nuevamente**
        </p>
      )}
    </div>
  );
};

export default Form;
