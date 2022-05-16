import React from 'react'
import { JournalEntry } from './JournalEntry';

export const JournalEntries = () => {
	const entries = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	return (
		<div className='jourlan__entries'>
			{
				entries.map(val => {
					return <JournalEntry key={val}/>
				})
			}
		</div>
	)
}
