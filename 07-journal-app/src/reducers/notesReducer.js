import { types } from "../types/types";

const initialState = {
	notes: [],
	active: null
}

export const notesReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.noteActive:
			return {
				...state,
				active: {
					...action.payload
				}
			}
		case types.notesAddNewNote: 
			return {
				...state,
				notes: [...state.notes, action.payload]
			}
		case types.notesLoad:
			return {
				...state,
				notes: [...action.payload]
			}
		case types.noteUpdated:
			return {
				...state,
				notes: state.notes.map(
					note => note.id === action.payload.id
						? action.payload.note : note
				)
			}
		case types.noteDeleted: 
			return {
				...state,
				active: null,
				notes: state.notes.filter(note => note.id !== action.payload)
			}
		case types.notesLogoutCleaning: 
			return {
				...state,
				notes: [],
				active: null
			}
		default:
			return state;
	}
}
