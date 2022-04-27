import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">useContext</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<NavLink exact="true" className={`${(navData) => navData.isActive ? "active" : ""} nav-link`} aria-current="page" to="/">HOME</NavLink>
						<NavLink exact="true" className={`${(navData) => navData.isActive ? "active" : ""} nav-link`} to="/login">Login</NavLink>
						<NavLink exact="true" className={`${(navData) => navData.isActive ? "active" : ""} nav-link`} to="/about">Logout</NavLink>
					</div>
				</div>
			</div>
		</nav>
	)
}
