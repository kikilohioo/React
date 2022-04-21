import { useState } from "react"

export const useForm = (initialState = {}) => {
	const [values, setValues] = useState(initialState);

	const handdleInputChange = ({target}) => {
		setValues({
			...values,
			[target.name]: target.value
		});
	}

	return [values, handdleInputChange];
}
