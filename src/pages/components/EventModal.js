import React, { useCallback, useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";

const labelClasses = ["green", "blue", "red"];

export default function EventModal() {
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedLabel, setSelectedLabel] = useState(labelClasses[0]);
  const { setShowEventModal, daySelected } = useContext(GlobalContext);
  const [startHour, setStartHour] = useState("01");
  const [startMinute, setStartMinute] = useState("00");
  const [startAmPm, setStartAmPm] = useState("AM");
  const [endHour, setEndHour] = useState("01");
  const [endMinute, setEndMinute] = useState("00");
  const [endAmPm, setEndAmPm] = useState("AM");
  const [startPeriod, setStartPeriod] = useState("");
  const [endPeriod, setEndPeriod] = useState("");

  const handleSave = useCallback(
    
    (e) => {
      e.preventDefault();
      
      const startDateTime = daySelected
        .clone()
        .hour(
          startAmPm === "PM" ? parseInt(startHour) + 12 : parseInt(startHour)
        )
        .minute(parseInt(startMinute));
     
      const endDateTime = daySelected
        .clone()
        .hour(endAmPm === "PM" ? parseInt(endHour) + 12 : parseInt(endHour))
        .minute(parseInt(endMinute));
     
      const event = {
        title,
        description,
        label: selectedLabel,
        startDateTime,
        endDateTime,
      };
      
      console.log("event: ", event);
      
      setShowEventModal(false);
    },
    
    [
      daySelected,
      title,
      description,
      selectedLabel,
      startAmPm,
      startHour,
      startMinute,
      endAmPm,
      endHour,
      endMinute,
      setShowEventModal,
    ]
  
  );

  return (
    
    <div className="h-screen w-4 fixed left-0 top-0 flex justify-center items-center">
      
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          
          <button onClick={() => setShowEventModal(false)}>
            <span className="material-icons-outlined text-gray-400">close</span>
          </button>
        
        </header>
        
        <div className="p-3">
          
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            
            <input
              type="text"
              name="title"
              placeholder="Add Title"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />
            
            <span className="material-icons-outlined text-gray-400">
              schedule
            </span>
            
            <div className="flex items-center"> 
            
              <label htmlFor="startTime" className="mr-2">
                Start Time
              </label>
              
              <select
                value={startHour}
                onChange={(e) => setStartHour(e.target.value)}
                className="border border-gray-400 mr-2"
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
                  <option key={hour} value={hour.toString().padStart(2, "0")}>
                    {hour}
                  </option>
                ))}
              </select>
              
              <select
                value={startMinute}
                onChange={(e) => setStartMinute(e.target.value)}
                className="border border-gray-400 ml-2 mr-2"
              >
                {Array.from({ length: 4 }, (_, i) => i * 15).map((minute) => (
                  <option
                    key={minute}
                    value={minute.toString().padStart(2, "0")}
                  >
                    {minute.toString().padStart(2, "0")}
                  </option>
                ))}
              </select>
              
              <select
                value={startPeriod}
                onChange={(e) => setStartPeriod(e.target.value)}
                className="border border-gray-400"
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
           
            </div>
            
            <div className="mt-2">
              
              <label htmlFor="endTime" className="mr-2">
                End Time
              </label>
              
              <select
                value={endHour}
                onChange={(e) => setEndHour(e.target.value)}
                className="border border-gray-400 mr-2"
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
                  <option key={hour} value={hour.toString().padStart(2, "0")}>
                    {hour}
                  </option>
                ))}
              </select>
              
              <span>:</span>
              
              <select
                value={endMinute}
                onChange={(e) => setEndMinute(e.target.value)}
                className="border border-gray-400 ml-2 mr-2"
              >
                {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
                  <option
                    key={minute}
                    value={minute.toString().padStart(2, "0")}
                  >
                    {minute.toString().padStart(2, "0")}
                  </option>
                ))}
              </select>
              
              <select
                value={endPeriod}
                onChange={(e) => setEndPeriod(e.target.value)}
                className="border border-gray-400"
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            
            </div>
          </div>
        </div>
        
        <footer className="flex justify-end border-t p-3 mt-5">
          
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        
        </footer>
      </form>
    </div>
  );
}
