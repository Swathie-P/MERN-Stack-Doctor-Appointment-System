import React, { useState } from 'react';
import axios from 'axios';

function BookingForm({ doctorId }) {
  const [date, setDate] = useState('');
  const [document, setDocument] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('doctorId', doctorId);
    formData.append('date', date);
    formData.append('document', document);

    try {
      await axios.post('/api/appointments', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Appointment booked successfully');
    } catch (error) {
      console.error('Booking error', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="file"
        onChange={(e) => setDocument(e.target.files[0])}
      />
      <button type="submit">Book Appointment</button>
    </form>
  );
}

export default BookingForm;
