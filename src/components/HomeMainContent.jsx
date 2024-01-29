import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomeMainContent() {
    const navigate = useNavigate();
    const [profession, setProfession] = useState('');
    const [location, setLocation] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Construct the URL for the API Gateway endpoint
        const apiEndpoint = `https://wdust2ye7o3xuv3trvbig5snua0xjoqp.lambda-url.eu-west-1.on.aws/=${encodeURIComponent(profession)}&location=${encodeURIComponent(location)}`;

        try {
            const response = await fetch(apiEndpoint);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            // Navigate with the search results
            navigate('/mapdashboard', { state: { doctors: data } });
        } catch (error) {
            console.error('Search failed:', error);
            setError('Failed to perform search. Please try again later.');
        }
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
