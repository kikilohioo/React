import React, { useEffect, useState } from 'react'
import { AuthRouter } from './AuthRouter'
import { firebase } from '../firebase/firebase-config'
import {
	BrowserRouter as Router,
	Switch
} from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { useDispatch } from 'react-redux'
import { login } from '../actions/auth'
import { LoadingPage } from '../components/LoadingPage'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { startLoadingNotes } from '../actions/notes'

export const AppRouter = () => {
	const dispatch = useDispatch();
	const [checking, setChecking] = useState(true)
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName))
				setIsLoggedIn(true)
				dispatch(startLoadingNotes(user.uid))
			} else {
				setIsLoggedIn(false)
			}
			setChecking(false)
		})
	}, [dispatch, setChecking, setIsLoggedIn])

	if (checking) {
		return <LoadingPage />
	}

	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute
						path='/auth'
						isAuthenticated={isLoggedIn}
						component={AuthRouter}
					/>
					<PrivateRoute
						exact
						isAuthenticated={isLoggedIn}
						path='/'
						component={JournalScreen}
					/>
				</Switch>
			</div>
		</Router>
	)
}
