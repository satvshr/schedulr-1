import GlobalContext from './GlobalContext'
import React, { useEffect, useMemo, useReducer, useState } from 'react'
import dayjs from 'dayjs'

function savedEventsReducer(state, {type, payload}) {
  switch (type) {
    case 'push':
      return [...state, payload]
    case "update":
      return state.map(evt => evt.id === payload.id ? payload : evt )
    case "delete":
      return state.filter(evt => evt.id !== payload.id )
    default:
      throw new Error();

  }
}
function initEvents() {
  const storageEvents = typeof localStorage !== 'undefined' ? localStorage.getItem('savedEvents') : null;
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}


export default function ContextWrapper(props) {
  
  const [monthIndex, setMonthIndex] = useState(dayjs().month())
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs())
  const [labels, setLabels] = useState([]);
  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer,
     [],
     initEvents
     );

    useEffect(() => {
      if(!showEventModal) {
        setSelectedEvent(null);
      }
    }, [setShowEventModal])

     const filteredEvents = useMemo(() => {
      return savedEvents.filter(evt => 
        labels.filter((lbl) => lbl.checked)
        .map(lbl => lbl.label)
        .includes(evt.label)
        );
     }, [savedEvents, labels])

     useEffect(() => {
      setLabels((prevLabels) => {
        return [...new Set( savedEvents.map(evt => evt.label))].map(label => {
          const currentLabel = prevLabels.find(lbl => lbl.label === label);
          return {
            label,
            checked: currentLabel ? currentLabel.checked : true,
          }
        })
      })
     }, [savedEvents]);

     useEffect(() => {
      localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
     }, [savedEvents]);

     function updateLabel(label) {
      setLabels(labels.map((lbl) => lbl.label === label.label ? label : lbl))
     }

  return (
    <GlobalContext.Provider value={{
      monthIndex, 
      setMonthIndex,
      showEventModal,
      setShowEventModal,
      daySelected,
      setDaySelected,
      dispatchCalEvent,
      savedEvents,
      selectedEvent,
      setSelectedEvent,
      setLabels,
      labels,
      updateLabel,
      filteredEvents
      }}>
        {props.children}
    </GlobalContext.Provider>
  )
}
