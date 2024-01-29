import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomeMainContent() {
    const navigate = useNavigate();
    const [profession, setProfession] = useState('');
    const [location, setLocation] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct the URL for the API Gateway endpoint
        const apiEndpoint = `http://localhost:5170/api/v1/search`;
        const searchData = {
            city: location,
            specialty: profession
        };
        console.log(searchData)
        fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(searchData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const searchState = {
                    practitioners: data,
                    specialty: profession,
                    city: location
                }
                if(data.length> 0){
                    navigate('/mapdashboard', { state: { data: searchState } });
                }else{
                    setError("No Practitioner Found For the Searched Location")
                }
            })
            .catch(error => {
                // Handle errors here
                setError(error)
                console.error('Error:', error);
            });
    };

    return (
        <div className="main-content">
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="search-area">
                    <h1>BOOK RIDES & <br /> APPOINTMENTS, 24/7. <br /> IT'S FREE!</h1>
                    <div className="search-box">
                        <select value={profession} onChange={(e) => setProfession(e.target.value)} className="search-dropdown">
                            <option value="">Select Specialty</option>
                            <option value="general-practice">General Practice</option>
                            <option value="cardiologist">Cardiologist</option>
                            <option value="pediatrician">Pediatrician</option>
                            <option value="Dentist">Dentist</option>
                            <option value="Optimetrist">Optimetrist</option>
                        </select>
                        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="search-input" placeholder="Enter city or ZIP code" />
                        <button type="submit" className="searchbutton-link">Search</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default HomeMainContent;
