import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DoctorDashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function fetchAppointments() {
      const response = await axios.get('/api/appointments/doctor');
      setAppointments(response.data);
    }

    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Doctor Dashboard</h2>
      <h3>Upcoming Appointments</h3>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment._id}>
            <p>Patient: {appointment.userInfo.name}</p>
            <p>Date: {new Date(appointment.date).toLocaleString()}</p>
            <p>Status: {appointment.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorDashboard;
