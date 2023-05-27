import GlobalContext from './GlobalContext';
import React, { useEffect, useMemo, useReducer, useState } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [labels, setLabels] = useState([]);
  const isLoading = initEvents(); // Extract loading state

  // Return a loading indicator if the data is still loading
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Once the data is loaded, proceed with the rest of the code
  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );

  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);

  console.log(savedEvents);
  console.log(typeof savedEvents);
  const filteredEvents = useMemo(() => {
    return savedEvents.filter((evt) =>
      labels
        .filter((lbl) => lbl.checked)
        .map((lbl) => lbl.label)
        .includes(evt.label)
    );
  }, [savedEvents, labels]);

  useEffect(() => {
    setLabels((prevLabels) => {
      return [...new Set(savedEvents.map((evt) => evt.label))].map((label) => {
        const currentLabel = prevLabels.find((lbl) => lbl.label === label);
        return {
          label,
          checked: currentLabel ? currentLabel.checked : true,
        };
      });
    });
  }, [savedEvents]);

  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);

  function updateLabel(label) {
    setLabels(labels.map((lbl) => (lbl.label === label.label ? label : lbl)));
  }
  async function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case 'push':
      try {
        const dat = [payload];
        const jsonString = JSON.stringify(dat);

        // Send POST request
        await axios.post('http://localhost:8000/api', jsonString);
        console.log('Request sent');

        // Make GET request
        const response = await fetch('http://localhost:8000/get');
        const data = await response.json();

        // Process the received data in React
        console.log(data);

        // Return the received data
        return data;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
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

function initEvents() {
  const [storageEvents, setStorageEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8000/get');
        const data = await response.json();

        // Process the fetched data
        console.log(data);

        setStorageEvents(data);
        setIsLoading(false); // Set loading state to false once the data is loaded
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    }

    fetchData();
  }, []);

  return isLoading; // Return loading state
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
        dispatchCalEvent,
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