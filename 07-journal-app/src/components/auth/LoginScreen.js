import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

export const LoginScreen = () => {
	const dispatch = useDispatch();

	const [formValues, handleInputChange] = useForm({
		email: 'name@mail.com',
		password: '123456'
	});

	const { email, password } = formValues;

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(startLoginEmailPassword(email,password));
	}
	
	const handleGoogleLogin = () => {
		dispatch(startGoogleLogin());
	}

	return (
		<div>
			<h3 className='auth__title mb-5'>Login</h3>
			<form onSubmit={handleLogin}>
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
				<Link className='link' to='/auth/register'>Create new account</Link>
			</form>
		</div>
	)
}
