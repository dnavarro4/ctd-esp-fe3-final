import React, { useEffect } from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'
import { ToggleButton } from '../Components/ToggleButton';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useContextGlobal();
  

  return (
    <main className={state.theme ? "dark" : ""} >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.list.map((dentist) => (
          <Card item={dentist} key={dentist.id}/>
        ))
        }
                       
      </div>
    </main>
  )
}

export default Home