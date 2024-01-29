import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RideBookingMainContent() {

    const [formData, setFormData] = useState({
        patientName: '',
        reasonForVisit: '',
        date: '',
        time: '',
        driver: '',
        // ...other fields...
    });

    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/doctordashboard');
    };
    const [availableDrivers, setAvailableDrivers] = useState([]);

    useEffect(() => {
        if (formData.date && formData.time) {
            fetchAvailableDrivers(formData.date, formData.time);
        }
    }, [formData.date, formData.time]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const fetchAvailableDrivers = async (date, time) => {
        // API call to fetch drivers based on the selected date and time
        // Update the availableDrivers state with the fetched data
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic
    };

    return (
        <div className="main-content">
            <form onSubmit={handleSubmit} className="ride-booking-form">
                <div>
                    <h2 className="form-title">Ride Booking Form</h2>
                </div>
                <label>
                    Patient Name:
                    <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} />
                </label>
                <label>
                    Reason for Visit:
                    <input type="text" name="reasonForVisit" value={formData.reasonForVisit} onChange={handleChange} />
                </label>
                <label>
                    Date:
                    <input type="date" name="date" value={formData.date} onChange={handleChange} />
                </label>
                <label>
                    Time:
                    <input type="time" name="time" value={formData.time} onChange={handleChange} />
                </label>
                <label>
                    Choose a Driver:
                    <select name="driver" value={formData.driver} onChange={handleChange}>
                        {availableDrivers.map(driver => (
                            <option key={driver.id} value={driver.id}>{driver.name}</option>
                        ))}
                    </select>
                </label>
                <div>
                    <button type="submit" className="button-link">Book Ride</button>
                    <button onClick={handleLoginClick} type="button" className="cancel-button">Cancel</button>
                </div>
            </form>
        </div>


    );
}

export default RideBookingMainContent;
