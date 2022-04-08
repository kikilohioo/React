import React, { useState } from 'react';
import PropTypes from 'prop-types';

//Componente Funcional con "Fragment" implicito que es: <>...contenido html...</>
const CounterApp = ({ value }) => {

	const [ counter, setCounter ] = useState(value);

	//Aumentar contador
	const counterAdd = (e) => setCounter(counter + 1) //forma 2 de incrementar el counter: setCounter((c)=>c+1)
	
	//Resetear contador
	const counterReset = (e) => setCounter(value)
	
	//Decrimentar contador
	const counterSubst = (e) => setCounter(counter-1)
	
	// const counterAdd2 = (msg) => {
	// 	return () => {
	// 		console.log(msg)
	// 	};
	// }

	return (
		<>
			<hr/>
			<h3>Contador</h3>
			<p>{ counter }</p>
			<button onClick={counterAdd}>+1</button>
			<button onClick={counterReset}>Reset</button>
			<button onClick={counterSubst}>-1</button>
			{/* <button onClick={counterAdd2("Hola Mundo")}>+1</button> */}
		</>
	);

}

CounterApp.propTypes = {
	value: PropTypes.number
};

export default CounterApp;