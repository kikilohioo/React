import React from 'react'
import { useSelector } from 'react-redux'
import { JournalEntry } from './JournalEntry';

export const JournalEntries = () => {
	const { notes } = useSelector(state => state.notes);
	return (
		<div className='jourlan__entries'>
			{
				notes.length > 0 &&
				notes.map(note => {
					return <JournalEntry
								key={note.id}
								note={note}
							/>
				})
			}
		</div>
	)
}
