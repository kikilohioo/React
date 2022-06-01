import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator'
import { useForm } from '../../hooks/useForm';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';

export const LoginScreen = () => {
	const dispatch = useDispatch();
	const { msgError, loading } = useSelector(state => state.ui);

	const [formValues, handleInputChange] = useForm({
		email: 'caiqui@mail.com',
		password: '12345678'
	});

	const { email, password } = formValues;

	const handleLogin = (e) => {
		e.preventDefault();
		if (isFormValid()) {
			dispatch(startLoginEmailPassword(email, password));
		}
	}
	
	const isFormValid = () => {
		if (!validator.isEmail(email)) {
			dispatch(setError('El correo electrónico no es valido'))
			return false;
		} else if (password.length < 8) {
			dispatch(setError('La contraseña debe tener al menos 8 caracteres'))
			return false;
		}
		dispatch(removeError())
		return true;
	}

	const handleGoogleLogin = () => {
		dispatch(startGoogleLogin());
	}

	const resetError = () => {
		dispatch(removeError())
	}

	return (
		<div className='animate__animated animate__fadeIn animate__faster'>
			<h3 className='auth__title mb-5'>Login</h3>
			<form onSubmit={handleLogin}>
				{
					msgError &&
					<div className='auth__alert-error'>
						{msgError}
					</div>
				}
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
				<button
					type='submit'
					className='btn btn-primary'
					disabled={loading}
				>Login</button>
				<hr />
				<div className='auth__social-networks'>
					<p>or maybe login with...</p>
					<div className="google-btn" onClick={handleGoogleLogin}>
						<div className="google-icon-wrapper">
							<img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
						</div>
						<p className="btn-text">
							<b>Sign in with google</b>
						</p>
					</div>
				</div>
				<Link className='link' to='/auth/register' onClick={resetError}>Create new account</Link>
			</form>
		</div>
	)
}
