import React from 'react'
import {Link} from 'react-router-dom'

export const RegisterScreen = () => {
	return (
		<div>
			<h3 className='auth__title mb-5'>Register</h3>
			<form>
				<input
					type="text"
					placeholder='Name'
					className='auth__input'
					name='name'
				/>
				<input
					type="text"
					placeholder='Email'
					className='auth__input'
					autoComplete='off'
					name='email'
				/>
				<input
					type="password"
					placeholder='Password'
					className='auth__input'
					name='password'
				/>
				<input
					type="password"
					placeholder='Confirm Password'
					className='auth__input'
					name='confirm_password'
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
