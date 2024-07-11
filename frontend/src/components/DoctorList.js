import React from 'react';
import DoctorCard from './DoctorCard';

function DoctorList({ doctors }) {
  return (
    <div>
      <h3>Available Doctors</h3>
      <div>
        {doctors.map((doctor) => (
          <DoctorCard key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}

export default DoctorList;
