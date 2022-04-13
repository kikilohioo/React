import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {
	const [state, setState] = useState({ //1 - Dejamos el estado como objeto integral
		counter1: 10,
		counter2: 20
	});

	const { counter1, counter2 } = state; //2 - Lo desestructuramos aparte para tener acceso a las propiedades especificas { counter1, counter2 } y al estado entero [state, setState]
	console.log(counter1)
  return (
	  <>
		  <h1>Counter {counter1}</h1>
		  <h1>Counter {counter2}</h1>
		  <hr />
		  <button
			  className='btn btn-primary'
			  onClick={() => {
				  setState({
					  ...state, //3 - Desestructuramos para obtener todas las propiedades
					  counter1: counter1 + 1 //4 - Modificamos la propiedad que queremos y se asigna o crea automaticamente gracias a la desestructuración anterior
				  })
			  }}
		  >+1</button>
	  </>
  )
}
