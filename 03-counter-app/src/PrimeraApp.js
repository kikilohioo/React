import React from 'react';
import PropTypes from 'prop-types';

//Componente Funcional con "Fragment" implicito que es: <>...contenido html...</>
const PrimeraApp = ({ title, subtitle, paragraph }) => {

	return (
		<>
			<h1>{title}</h1>
			<h5>{subtitle}</h5>
			<p>{paragraph}</p>
		</>
	);
	
}

PrimeraApp.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	paragraph: PropTypes.string.isRequired
};

PrimeraApp.defaultProps = {
	title: '',
	subtitle: '',
	paragraph: ''
}

export default PrimeraApp;