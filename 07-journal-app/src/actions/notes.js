import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";
import Swal from 'sweetalert2';
import { fileUpload } from "../helpers/fileUpload";

export const startNewNote = () => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;
		
		const newNote = {
			title: '',
			body: '',
			date: new Date().getTime()
		}

		const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
		dispatch(activeNote(doc.id, newNote));
	}
}

export const activeNote = (id, note) => ({
	type: types.noteActive,
	payload: {
		id,
		...note
	}
})

export const startLoadingNotes = (uid) => {
	return async (dispatch) => {
		const notes = await loadNotes(uid)
		dispatch(setNotes(notes))
	}
}

export const setNotes = (notes) => ({
	type: types.notesLoad,
	payload: notes
})

export const startSaveNote = (note) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;
		const { notes } = getState().notes;

		if (!note.url) {
			delete note.url
		}
		
		const noteToFirestore = { ...note };
		delete noteToFirestore.id;

		let notesIds = notes.filter(nota => nota.id === note.id);

		await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
		if (notesIds.length > 0) {
			dispatch(refreshNote(note.id, note))
		} else {
			dispatch(saveNote(note.id, note))
		}
		
		Swal.fire('Saved', note.title, 'success')
	}
}

export const saveNote = (id, note) => ({
	type: types.notesAddNewNote,
	payload: {
		id,
		...note
	}
})

export const refreshNote = (id, note) => ({
	type: types.noteUpdated,
	payload: {
		id,
		note: {
			id,
			...note
		}
	}
})

export const startUploading = (file) => {
	return async (dispatch, getState) => {
		const { active: activeNote } = getState().notes;
		Swal.fire({
			title: 'Uploading',
			text: 'Please wait file uploading',
			allowOutsideClick: false,
			didOpen: () => {
				Swal.showLoading();
			}
		})
		const fileUrl = await fileUpload(file);
		activeNote.url = fileUrl;
		dispatch(startSaveNote(activeNote));
		Swal.close();
	}
}

export const startDeleting = (id) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;
		Swal.fire({
			title: 'Deleting',
			text: 'Please wait file uploading',
			allowOutsideClick: false,
			didOpen: () => {
				Swal.showLoading();
			}
		})
		await db.doc(`${uid}/journal/notes/${id}`).delete()
		Swal.close();
		Swal.fire('Deleted', 'Successfull note delete', 'success')
		dispatch(deleteNote(id));
	}
}

export const deleteNote = (id) => ({
	type: types.noteDeleted,
	payload: id
})

export const notesLogout = () => ({
	type: types.notesLogoutCleaning
})