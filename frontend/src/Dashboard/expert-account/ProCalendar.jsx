import React, { useState } from 'react';

const styles = {
  calendar: {
    width: '300px',
    border: '1px solid #ddd',
    fontFamily: 'Arial, sans-serif',
  },
  monthHeader: {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
  },
  weekdays: {
    display: 'flex',
    backgroundColor: '#f0f0f0',
  },
  weekday: {
    flex: 1,
    textAlign: 'center',
    padding: '5px',
  },
  days: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
  },
  day: {
    textAlign: 'center',
    padding: '5px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#f0f0f0',
    },
  },
  emptyDay: {
    backgroundColor: '#f9f9f9',
  },
  hasSlots: {
    backgroundColor: '#90EE90',
  },
  timePicker: {
    marginTop: '10px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  input: {
    margin: '5px',
    padding: '5px',
  },
  button: {
    margin: '5px',
    padding: '5px 10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

const ProCalendar = ({ timeSlots, onTimeSlotChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handleDateClick = (day) => {
    const clickedDate = `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    setSelectedDate(clickedDate);
    setShowTimePicker(true);
  };

  const handleAddTimeSlot = (startTime, endTime) => {
    const newTimeSlot = {
      day: selectedDate,
      startingTime: startTime,
      endingTime: endTime
    };
    onTimeSlotChange([...timeSlots, newTimeSlot]);
    setShowTimePicker(false);
  };

  const hasTimeSlot = (day) => {
    const formattedDay = `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    return timeSlots.some(slot => slot.day === formattedDay);
  };

  return (
    <div style={styles.calendar}>
      <div style={styles.monthHeader}>
        {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}
      </div>
      <div style={styles.weekdays}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} style={styles.weekday}>{day}</div>
        ))}
      </div>
      <div style={styles.days}>
        {Array(firstDayOfMonth).fill(null).map((_, index) => (
          <div key={`empty-${index}`} style={{...styles.day, ...styles.emptyDay}}></div>
        ))}
        {days.map(day => (
          <div
            key={day}
            style={{
              ...styles.day,
              ...(hasTimeSlot(day) ? styles.hasSlots : {})
            }}
            onClick={() => handleDateClick(day)}
          >
            {day}
          </div>
        ))}
      </div>
      {showTimePicker && (
        <TimeSlotPicker onAddTimeSlot={handleAddTimeSlot} />
      )}
    </div>
  );
};

const TimeSlotPicker = ({ onAddTimeSlot }) => {
  const [startTime, setStartTime] = useState('10:00');
  const [endTime, setEndTime] = useState('10:30');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTimeSlot(startTime, endTime);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.timePicker}>
      <input
        type="time"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        style={styles.input}
      />
      <input
        type="time"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Add Time Slot</button>
    </form>
  );
};

export default ProCalendar;
