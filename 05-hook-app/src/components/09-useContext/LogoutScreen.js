import React, { useContext } from 'react'
import './examples.css'
import { UserContext } from './UserContext'

export const LogoutScreen = () => {
	const { user, setUser } = useContext(UserContext)
  return (
	  <main>
		  <h1>LogoutScreen</h1>
		  <hr />
		  <pre>
			  {JSON.stringify(user, null, 3)}
		  </pre>
		  <button
			  className='btn btn-danger'
			  onClick={() => setUser({})}
		  >Logout</button>
	  </main>
  )
}
