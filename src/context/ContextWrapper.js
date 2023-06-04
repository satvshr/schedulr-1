import GlobalContext from './GlobalContext';
import React, { useEffect, useMemo, useReducer, useState } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState([]);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [labels, setLabels] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  // const [savedEvents, setSavedEvents] = useState([]);

  // Once the data is loaded, proceed with the rest of the code
  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer,
    null
  );



  const filteredEvents = useMemo(() => {
    if (!isLoading) {
      return savedEvents.filter((evt) =>
      labels
        .filter((lbl) => lbl.checked)
        .map((lbl) => lbl.label)
        .includes(evt.label)
    );
    }
  }, [savedEvents, labels, isLoading]);

  useEffect(() => {
    console.log(savedEvents)
  }, [savedEvents])

  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent([]);
    }
  }, [showEventModal]);

  useEffect(() => {
    if(!isLoading) {
      setLabels((prevLabels) => {
        return [...new Set(savedEvents.map((evt) => evt.label))].map((label) => {
          const currentLabel = prevLabels.find((lbl) => lbl.label === label);
          return {
            label,
            checked: currentLabel ? currentLabel.checked : true,
          };
        });
      });
    }
  }, [savedEvents, isLoading]);

  function updateLabel(label) {
    setLabels(labels.map((lbl) => (lbl.label === label.label ? label : lbl)));
  }
  async function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case 'push':
      try {
        if (payload != null) {
          const dat = [payload];
        const jsonString = JSON.stringify(dat);

        // Send POST request
        await axios.post('http://localhost:8000/api', jsonString);
        console.log('Request sent');

        }
        // Make GET request
        const response = await fetch('http://localhost:8000/get');
        const data = await response.json();

        // Process the received data in React
        
        if (data && Array.isArray(data)){
          console.log(data)
          return data
        }
        
        // Return the received data
        
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
      break
    case 'update':
      const update = [payload];
      const jsonstring = JSON.stringify(update);
      axios.post('http://localhost:8000/api', jsonstring);

      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case 'delete':
      const del = [payload];
      axios.post('http://localhost:8000/deletion', del);
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}

useEffect(() => {
  dispatchCalEvent({type: "push", payload: null});
}, []);

// useEffect(() => {
//   if (Array.isArray(savedEvents)) {
//     console.log(savedEvents)
//     setIsLoading(false)
//   }
// }, [savedEvents])
  // Return a loading indicator if the data is still loading
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        showEventModal,
        setShowEventModal,
        daySelected,
        setDaySelected,
        savedEvents,
        selectedEvent,
        setSelectedEvent,
        setLabels,
        labels,
        filteredEvents,
        updateLabel,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}