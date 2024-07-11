import React from 'react';

function AppointmentHistory({ appointments }) {
  return (
    <div>
      <h3>Appointment History</h3>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment._id}>
            <p>Doctor: {appointment.doctorInfo.fullname}</p>
            <p>Date: {new Date(appointment.date).toLocaleString()}</p>
            <p>Status: {appointment.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentHistory;
