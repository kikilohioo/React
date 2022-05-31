import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { startSaveNote } from '../../actions/notes';

export const NotesAppBar = () => {
	const { active: note } = useSelector(state => state.notes);
	const dispatch = useDispatch();

	const handleSave = () => {
		dispatch(startSaveNote(note))
	}
	return (
		<div className='notes__appbar'>
			<span style={{ marginTop: '-10px' }}>{moment(note.date).format("Do MMM YYYY") }</span>
			<div>
				<button className='btn'>
					Picture
				</button>
				<button className='btn' onClick={handleSave}>
					Save
				</button>
			</div>
		</div>
	)
}
