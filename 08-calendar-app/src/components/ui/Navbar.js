import React from 'react'

export const Navbar = () => {
	return (
		<div className='navbar navbar-dark bg-dark px-4'>
			<span className='navbar-brand'>
				Caiqui
			</span>
			<button className='btn btn-outline-danger'>
				<i className='fas fa-sign-out-alt me-2'></i>
				<span>Salir</span>
			</button>
		</div>
	)
}
