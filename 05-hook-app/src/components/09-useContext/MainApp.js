import React, { useState } from 'react'
import { AppRouter } from './AppRouter.js'
import { UserContext } from './UserContext'

export const MainApp = () => {
	const [user, setUser] = useState({})
	return (
		<UserContext.Provider value={{user,setUser}}>
			<AppRouter />
		</UserContext.Provider>
	)
}
