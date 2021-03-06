import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
	const { active: note } = useSelector(state => state.notes);
	const dispatch = useDispatch();
	const [formValues, handleInputChange, reset] = useForm(note);
	const { body, title, id } = formValues;

	const activeId = useRef(note.id);
	useEffect(() => {
		if (note.id !== activeId.current) {
		  reset(note)
		  activeId.current = note.id
	  }
	}, [note, reset])

	useEffect(() => {
	  dispatch(activeNote(formValues.id, {...formValues}))
	}, [formValues, dispatch])
	
	const handleDelete = () => {
		dispatch(startDeleting(id))
	}

	return (
		<div className='notes__main-content animate__animated animate__fadeIn animate__faster'>
			<NotesAppBar />
			<div className='notes__content'>
				<input
					name='title'
					type="text"
					placeholder='Some awesome title'
					className='notes__title-input'
					autoComplete='off'
					onChange={handleInputChange}
					value={title}
				/>
				<textarea
					name='body'
					placeholder='Whats new today?'
					className='notes__textarea'
					onChange={handleInputChange}
					value={body}
				></textarea>
				{
					(note.url) &&
					(
						<div className='notes__image'>
							<img src={note.url} alt="imagen"/>
						</div>
					)
				}
			</div>
			<button
				className='btn btn-danger'
				onClick={handleDelete}
			>Eliminar</button>
		</div>
	)
}
