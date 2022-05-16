import React from 'react'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
	return (
		<aside className='journal__sidebar'>
			<div className="journal__sidebar-navbar">
				<h3 className='mt-5'>
					<i className='fa fa-moon'></i>
					<span>Caiqui</span>
				</h3>
				<button className='btn'>
					<i className='fa fa-sign-out'></i>
				</button>
			</div>
			<div className="journal__new-entry">
				<i className='fa fa-calendar-plus fa-5x'></i>
				<p className='mt-5'>New entry</p>
			</div>
			<JournalEntries />
		</aside>
	)
}
