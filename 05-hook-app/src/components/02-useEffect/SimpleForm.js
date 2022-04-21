import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

	const [formState, setFormState] = useState({
		name: '',
		email: ''
	})

	const { name, email } = formState;

	useEffect(() => {
		// console.log("hey")
	}, [])

	const handdleInputChange = ({target}) => {
		setFormState({ //siempre que el state sea un objeto o array, hay que desestructurarlo tambien al intentar setearlo
			...formState,
			[target.name]: target.value
		})
	}
  return (
	<>
		<h1>useEffect</h1>
		<hr />
		  <div className='form-group'>
			  <input
				  type='text'
				  name='name'
				  className='form-control'
				  placeholder='Ingresa tu nombre'
				  autoComplete='off'
				  value={name}
				  onChange={handdleInputChange}
			  />
		  </div>
		  <br/>
		<div className='form-group'>
			  <input
				  type='text'
				  name='email'
				  className='form-control'
				  placeholder='Ingresa tu nombre'
				  autoComplete='off'
				  value={email}
				  onChange={handdleInputChange}
			  />
		</div>
		  {(name === '123') && <Message />}
	</>
  )
}
