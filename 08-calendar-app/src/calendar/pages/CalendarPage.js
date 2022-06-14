import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar } from 'react-big-calendar'
import { addHours } from 'date-fns'
import React, { useState } from 'react'

import { Navbar } from '../../ui'
import { localizer, getMessagesES } from '../../helpers'
import { CalendarModal, CalendarEvent } from '../';


export const CalendarPage = () => {
	const [lastview, setLastView] = useState(localStorage.getItem('lastView') || 'week');
	const events =  [
			{
				title: 'Cumpleaños 23',
				notes: 'Comprar fasito',
				start: new Date(),
				end: addHours(new Date(), 2),
				bgColor: '#fafafa',
				user: {
					_id: '123',
					name: 'Caiqui Viera'
				}
			}
		];

	const onDoubleClick = (event) => {
		
	}

	const onSelect = (event) => {
		
	}

	const onViewChange = (event) => {
		localStorage.setItem('lastView', event)
		setLastView(event)
	}

	return (
		<div>
			<Navbar />
			<div className="container mt-4 calendar-container">
				<Calendar
					localizer={localizer}
					events={events}
					defaultView={lastview}
					startAccessor="start"
					endAccessor="end"
					style={{ height: '85vh' }}
					culture={'es'}
					messages={getMessagesES()}
					components={{
						event: CalendarEvent
					}}
					onDoubleClickEvent={onDoubleClick}
					onSelectEvent={onSelect}
					onView={onViewChange}
				/>
				<CalendarModal />
			</div>
		</div>
	)
}
