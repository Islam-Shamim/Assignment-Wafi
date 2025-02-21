'use client'
import React, { useState } from 'react';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const events = [
  { date: new Date(2023, 9, 15), title: 'Event 1' },
  { date: new Date(2023, 9, 20), title: 'Event 2' },
  // Add more events here
];

function Calender() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const renderDays = () => {
    const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const daysArray = [];

    for (let i = 0; i < startDay; i++) {
      daysArray.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dayEvents = events.filter(event => 
        event.date.getFullYear() === currentDate.getFullYear() &&
        event.date.getMonth() === currentDate.getMonth() &&
        event.date.getDate() === i
      );

      daysArray.push(
        <div key={i} className="day">
          {i}
          {dayEvents.map((event, index) => (
            <div key={index} className="event">{event.title}</div>
          ))}
        </div>
      );
    }

    return daysArray;
  };

  return (
    <div className="calender">
      <div className="header">
        <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}>Prev</button>
        <h2>{months[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
        <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}>Next</button>
      </div>
      <div className="days grid grid-cols-7 gap-3 w-full">
        {days.map(day => <div key={day} className="day-name">{day}</div>)}
        {renderDays()}
      </div>
    </div>
  );
}

export default Calender;
