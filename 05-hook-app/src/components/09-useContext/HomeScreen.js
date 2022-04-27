import React, { useContext } from 'react'
import './examples.css'
import { UserContext } from './UserContext'

export const HomeScreen = () => {
	const {user} = useContext(UserContext)
  return (
	  <main>
		  <h1>HomeScreen</h1>
		  <hr />
		  <pre>
			  {JSON.stringify(user, null, 3)}
		  </pre>
	</main>
  )
}
