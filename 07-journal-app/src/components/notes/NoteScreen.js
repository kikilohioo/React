import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
	const { active: note } = useSelector(state => state.notes);
	const dispatch = useDispatch();
	const [formValues, handleInputChange, reset] = useForm(note);
	const { body, title } = formValues;

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
	
	
	return (
		<div className='notes__main-content'>
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
							<img src="https://images.pexels.com/users/avatars/206430/free-jpg-242.jpeg?auto=compress&fit=crop&h=600&w=600&dpr=1" alt="imagen"/>
						</div>
					)
				}
			</div>
		</div>
	)
}
