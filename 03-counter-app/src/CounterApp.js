import React from 'react';
import PropTypes from 'prop-types';

//Componente Funcional con "Fragment" implicito que es: <>...contenido html...</>
const PrimeraApp = ({ value }) => {

	return (
		<>
			<hr/>
			<h3>Contador</h3>
			<p>{value}</p>
		</>
	);

}

PrimeraApp.propTypes = {
	value: PropTypes.number
};

export default PrimeraApp;