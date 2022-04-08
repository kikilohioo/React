//Desestructuración

const persona = {
	nombre: "Caiqui",
	edad: 23,
	clave: "Kiki",
	rango: "Junior"
}

//extraer nombre de persona, seria igual a hacer: nombre = persona.nombre 
//podemos extraer más, separandolos por ,
const { nombre } = persona;

//si ya existe el nombre de la variable podemos cambiarlo asi: variable:nuevonombre
const { nombre: nombrePersona } = persona;

const useContext = ({ clave, nombre, edad, rango = "Trainee"/* Sirve como valor default, si no existe la propiedad en el objeto */ }) => {
	return {
		nombreClave: clave,
		anios: edad,
		talla: {
			estatura: 183,
			peso: 70
		}
	}
};

//extracción de objetos, objetos anidados y desestructuración
const { nombreClave, anios, talla: { estatura, peso } } = useContext(persona);

export function getPersonaEdad(anios = 22) {
	return anios;
}
// console.log(nombreClave, anios, estatura, peso);



