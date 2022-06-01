import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {
	const { active: note } = useSelector(state => state.notes);
	const dispatch = useDispatch();

	const handleSave = () => {
		dispatch(startSaveNote(note))
	}

	const handlePictureUpload = () => {
		document.getElementById('fileselector').click();
	}

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			dispatch(startUploading(file))
		}
	}

	return (
		<div className='notes__appbar'>
			<span style={{ marginTop: '-10px' }}>{moment(note.date).format("Do MMM YYYY")}</span>
			<input
				id='fileselector'
				type={'file'}
				name={'file'}
				style={{
					display: 'none'
				}}
				onChange={handleFileChange}
			/>
			<div>
				<button
					className='btn'
					onClick={handlePictureUpload}
				>
					Picture
				</button>
				<button className='btn' onClick={handleSave}>
					Save
				</button>
			</div>
		</div>
	)
}
