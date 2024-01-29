import React from 'react';

function DoctorDetail({ practitioner }) {
    return (
        <div className="practitioner-detail">
            <img src={practitioner.imageUrl} alt={practitioner.name} />
            <h3>{practitioner.name}</h3>
            <p>{practitioner.speciality}</p>
            <p>{practitioner.location}</p>
            <p>Available at: {practitioner.availableTime}</p>
            {/* Add more details as needed */}
        </div>
    );
}

export default DoctorDetail;
