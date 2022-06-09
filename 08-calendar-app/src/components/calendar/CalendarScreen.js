import React from 'react'
import { Navbar } from '../ui/Navbar'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction' // a plugin!
import './calendar.css';

export const CalendarScreen = () => {
	const handleDateClick = (e) => {
		
	}
	const handleEventClick = (e) => {
		
	}
	return (
		<div>
			<Navbar />
			<div className="container mt-4 calendar-container">
				<FullCalendar
					plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
					initialView="dayGridMonth"
					height={800}
					headerToolbar={{ center: 'dayGridMonth,dayGridWeek,dayGridDay' }}
					dateClick={handleDateClick}
					eventClick={handleEventClick}
					events={[
						{ title: 'event 1', date: '2022-06-01' },
						{ title: 'event 2', date: '2022-06-02' }
					]}
				/>
			</div>
		</div>
	)
}
