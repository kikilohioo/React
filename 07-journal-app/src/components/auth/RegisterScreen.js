import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import validator from 'validator'
import { useForm } from '../../hooks/useForm'


export const RegisterScreen = () => {
	const dispatch = useDispatch();

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
			
		}
	}

	const isFormValid = () => {
		if (name.trim().length === 0) {
			//cosas
			return false;
		} else if (!validator.isEmail(email)){
			//cosas
			return false;
		} else if(password !== confirm_password || password.length < 8){
			//cosas
			return false;
		}
	}

	return (
		<div>
			<h3 className='auth__title mb-5'>Register</h3>
			<form onSubmit={handleRegister}>
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
				>Register</button>
				<Link className='link' to='/auth/login'>Already registered?</Link>
			</form>
		</div>
	)
}
