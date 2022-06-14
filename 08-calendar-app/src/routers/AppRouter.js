import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { LoginScreen } from '../auth'
import { CalendarPage } from '../calendar'

export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path={'/'} component={CalendarPage}/>
					<Route exact path={'/login'} component={LoginScreen} />
					<Redirect to={'/'} />
				</Switch>
			</div>
		</Router>
	)
}
