import { getPersonaEdad } from "../../../02-intro-javascript/src";
import '@testing-library/jest-dom';

describe('Pruebas en 02-intro-javascript/src/index.js', () => {
	test('prueba en metodo getPersonaEdad', () => { 
		const edad = 22;
		const anios = getPersonaEdad();

		expect(anios).toBe(edad);
	})
	
	test('prueba2 en metodo getPersonaEdad', () => {
		const edad = 22;
		const anios = getPersonaEdad(edad);

		expect(anios).toBe(edad);
	})
});