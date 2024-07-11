import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    async function fetchDoctors() {
      const response = await axios.get('/api/doctors/pending');
      setDoctors(response.data);
    }

    fetchDoctors();
  }, []);

  const approveDoctor = async (doctorId) => {
    try {
      await axios.post(`/api/doctors/approve/${doctorId}`);
      setDoctors(doctors.filter((doctor) => doctor._id !== doctorId));
    } catch (error) {
      console.error('Approval error', error);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>Pending Doctor Approvals</h3>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor._id}>
            <p>{doctor.fullname} ({doctor.specialization})</p>
            <button onClick={() => approveDoctor(doctor._id)}>Approve</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
