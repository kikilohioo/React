import React, { useContext } from 'react'
import { useForm } from '../../hooks/useForm/useForm'
import { UserContext } from './UserContext'

export const FormLogin = () => {
	const { setUser } = useContext(UserContext)
	const [userValues, handleInputChange] = useForm({})

	const handleSubmit = (e) => {
		e.preventDefault()
	}
	
  return (
	  <form className='row w-25' onSubmit={e => handleSubmit(e)}>
		  Correo Electrónico
		  <input type="email" className='mb-3' name='email' id='email' onChange={handleInputChange} />
		  Contraseña
		  <input type="password" name='password' id='password' />
		  <button type='submit'
			  className='btn btn-success mt-3'
			  onClick={() => setUser({...userValues})}
		  >Login</button>
	</form>
  )
}
