import React from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom'
import { LogoutScreen } from './LogoutScreen'
import { HomeScreen } from './HomeScreen'
import { LoginScreen } from './LoginScreen'
import { NavBar } from './NavBar'
import { NotFoundScreen } from './NotFoundScreen'

export const AppRouter = () => {
	return (
		<Router>
			<NavBar />
			<div>
				<Routes>
					<Route path='/' element={<HomeScreen />} />
					<Route path='/about' element={<LogoutScreen />} />
					<Route path='/login' element={<LoginScreen />} />
					<Route path='*' element={ <NotFoundScreen />}/>
				</Routes>
			</div>
		</Router>
	)
}
