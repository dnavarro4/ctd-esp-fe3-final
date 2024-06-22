import React from 'react'

const Message = ({cliente}) => {
    const { nombre, email } = cliente;
  return (
    <>
      <p>**Gracias {nombre}, te contactaremos cuando antes vía mail**</p>
    </>
  )
}

export default Message