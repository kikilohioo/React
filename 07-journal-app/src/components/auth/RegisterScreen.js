import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator'
import { useForm } from '../../hooks/useForm'
import { removeError, setError } from '../../actions/ui';
import { startRegisterEmailPasswordName } from '../../actions/auth';


export const RegisterScreen = () => {
	const dispatch = useDispatch();
	const {msgError, loading} = useSelector(state => state.ui);

	const [formValues, handleInputChange] = useForm({
		name: 'Caiqui Viera',
		email: 'caiqui@mail.com',
		password: '12345678',
		confirm_password: '12345678'
	});

	const { name, email, password, confirm_password } = formValues;

	const handleRegister = (e) => {
		e.preventDefault();
		if (isFormValid()) {
			dispatch(startRegisterEmailPasswordName(email, password, name))
		}
	}

	const isFormValid = () => {
		if (name.trim().length === 0) {
			dispatch(setError('El nombre no puede ir vacio'))
			return false;
		} else if (!validator.isEmail(email)) {
			dispatch(setError('El correo electrónico no es valido'))
			return false;
		} else if (password.length < 8) {
			dispatch(setError('La contraseña debe tener al menos 8 caracteres'))
			return false;
		} else if (password !== confirm_password) {
			dispatch(setError('Las contraseñas no coinciden'))
			return false;
		}
		dispatch(removeError())
		return true;
	}

	const resetError = () => {
		dispatch(removeError())
	}

	return (
		<div>
			<h3 className='auth__title mb-5'>Register</h3>
			<form onSubmit={handleRegister}>
				{
					msgError &&
					<div className='auth__alert-error'>
						{msgError}
					</div>
				}
				<input
					type="text"
					placeholder='Name'
					className='auth__input'
					name='name'
					value={name}
					onChange={handleInputChange}
				/>
				<input
					type="text"
					placeholder='Email'
					className='auth__input'
					autoComplete='off'
					name='email'
					value={email}
					onChange={handleInputChange}
				/>
				<input
					type="password"
					placeholder='Password'
					className='auth__input'
					name='password'
					value={password}
					onChange={handleInputChange}
				/>
				<input
					type="password"
					placeholder='Confirm Password'
					className='auth__input'
					name='confirm_password'
					value={confirm_password}
					onChange={handleInputChange}
				/>
				<button
					type='submit'
					className='btn btn-primary'
					disabled={loading}
				>Register</button>
				<Link className='link' to='/auth/login' onClick={resetError}>Already registered?</Link>
			</form>
		</div>
	)
}
