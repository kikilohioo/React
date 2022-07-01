import calendarApi from '../api/calendarApi'
import { useSelector, useDispatch } from "react-redux"
import { onAddNewEvent, onEditedEvent, onSetActiveEvent, onDeleteEvent, onLoadEvents } from "../store/calendar/calendarSlice"
import { convertEventsDates } from '../helpers/convertEventsDates'
import Swal from 'sweetalert2'

export const useCalendarStore = () => {
    const dispatch = useDispatch()
    const { events, activeEvent } = useSelector(state => state.calendar)
    const { user } = useSelector(state => state.auth)

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async (calendarEvent) => {
        //backend
        try {
            if (calendarEvent.id) {
                //actualizando
                await calendarApi.put(`events/${calendarEvent.id}`, calendarEvent)
                dispatch(onEditedEvent({ ...calendarEvent, user }));
                return;
            }
            //creando
            const { data } = await calendarApi.post('/events', calendarEvent)
            dispatch(onAddNewEvent({ ...calendarEvent, id: data.event.id, user }));
        } catch (error) {
            console.log(error)
            Swal.fire('Error al guardar', error.response.data.msg, 'error')
        }
    }

    const startDeletetingEvent = async () => {
        //backend
        try {
            await calendarApi.delete(`/events/${activeEvent.id}`)
            dispatch(onDeleteEvent())
        } catch (error) {
            console.log(error)
            Swal.fire('Error al eliminar', error.response.data.msg, 'error')
        }
    }

    const startLoadingEvent = async () => {
        try {
            const { data } = await calendarApi.get('/events');
            const events = convertEventsDates(data.events)
            dispatch(onLoadEvents(events))
        } catch (error) {
            console.log(error)
        }
    }

    return ({
        //propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,

        //metodos
        setActiveEvent,
        startSavingEvent,
        startDeletetingEvent,
        startLoadingEvent
    })
}
