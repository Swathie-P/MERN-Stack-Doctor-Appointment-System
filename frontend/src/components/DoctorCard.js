import React from 'react';
import { Link } from 'react-router-dom';

function DoctorCard({ doctor }) {
  return (
    <div>
      <h4>{doctor.fullname}</h4>
      <p>{doctor.specialization}</p>
      <Link to={`/doctor/${doctor._id}`}>Book Now</Link>
    </div>
  );
}

export default DoctorCard;
