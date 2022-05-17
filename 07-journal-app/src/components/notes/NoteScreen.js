import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
	return (
		<div className='notes__main-content'>
			<NotesAppBar />
			<div className='notes__content'>
				<input
					type="text"
					placeholder='Some awesome title'
					className='notes__title-input'
					autoComplete='off'
				/>
				<textarea
					placeholder='Whats new today?'
					className='notes__textarea'
				></textarea>
				<div className='notes__image'>
					<img src="https://images.pexels.com/users/avatars/206430/free-jpg-242.jpeg?auto=compress&fit=crop&h=600&w=600&dpr=1" alt="imagen"/>
				</div>
			</div>
		</div>
	)
}
