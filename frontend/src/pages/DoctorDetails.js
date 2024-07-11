import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BookingForm from '../components/BookingForm';

function DoctorDetails() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    async function fetchDoctor() {
      const response = await axios.get(`/api/doctors/${id}`);
      setDoctor(response.data);
    }

    fetchDoctor();
  }, [id]);

  if (!doctor) return <div>Loading...</div>;

  return (
    <div>
      <h2>{doctor.fullname}</h2>
      <p>{doctor.specialization}</p>
      <p>{doctor.address}</p>
      <p>{doctor.phone}</p>
      <BookingForm doctorId={doctor._id} />
    </div>
  );
}

export default DoctorDetails;
