import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DoctorList from '../components/DoctorList';
import AppointmentHistory from '../components/AppointmentHistory';

function UserDashboard() {
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const doctorResponse = await axios.get('/api/doctors');
      setDoctors(doctorResponse.data);

      const appointmentResponse = await axios.get('/api/appointments');
      setAppointments(appointmentResponse.data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>User Dashboard</h2>
      <DoctorList doctors={doctors} />
      <AppointmentHistory appointments={appointments} />
    </div>
  );
}

export default UserDashboard;
