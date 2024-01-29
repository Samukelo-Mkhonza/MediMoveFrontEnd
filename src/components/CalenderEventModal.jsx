import React from 'react';

function CalendarEventModal({ date, onClose }) {
  // Fetch events for the selected date or pass them as props

  return (
    <div className="calendar-event-modal">
      <h2>Events for {date.toDateString()}</h2>
      {/* Render event details here */}
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default CalendarEventModal;
