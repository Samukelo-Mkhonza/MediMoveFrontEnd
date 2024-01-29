import React, { useState } from 'react';
import Calendar from 'react-calendar';
import CalendarEventModal from './CalenderEventModal';
import 'react-calendar/dist/Calendar.css'; // Default styling, which you can customize

function DoctorDashboardCalendar() {
  const [date, setDate] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);

  const handleDateClick = (value) => {
    // Set the date state and show the modal
    setDate(value);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
           <h1 className="calendar-title">Calendar</h1> 
      <Calendar
        onClickDay={handleDateClick}
        value={date}
      />
      {modalVisible && 
        <CalendarEventModal 
          date={date} 
          onClose={closeModal} 
        />
      }
    </div>
  );
}

export default DoctorDashboardCalendar;
