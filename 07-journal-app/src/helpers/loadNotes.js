import { db } from '../firebase/firebase-config'
import moment from 'moment'

export const loadNotes = async (uid) => {
	const notesSnap = await db.collection(`${uid}/journal/notes`).get();
	const notes = [];

	notesSnap.forEach(snapHijo => {
		notes.push({
			id: snapHijo.id,
			...snapHijo.data()
		})
	})

	notes.sort((a, b) => moment(a.date) < moment(b.date))
	return notes;
}
