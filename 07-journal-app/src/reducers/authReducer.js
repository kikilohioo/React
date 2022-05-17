import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
	const { login, logout } = types;	
	switch (action.type) {
		case login:
			return {
				uid: action.payload.uid,
				name: action.payload.displayName
			}
		case logout:
			return { }
		default:
			return state;
	}
}