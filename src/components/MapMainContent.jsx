import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import 'bootstrap/dist/css/bootstrap.min.css';




function MapMainContent({ google }) {
    const [practitioners, setPractitioners] = useState([]);
    const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });

    const locationa = useLocation();
    const doctorsData = locationa?.state?.data || null;
    console.log(doctorsData)

    useEffect(() => {
        const geocodeLocation = async () => {
            const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(doctorsData.city)}&key=AIzaSyDOWL_-VZyW4pqE3i_xB8Gk3KpWiD0dVjA`;

            try {
                const geocodeResponse = await fetch(geocodeUrl);
                const geocodeData = await geocodeResponse.json();

                if (!geocodeResponse.ok) {
                    throw new Error(`Geocoding error! status: ${geocodeResponse.status}`);
                }
                if (geocodeData.results && geocodeData.results.length > 0) {
                    const { lat, lng } = geocodeData.results[0].geometry.location;
                    console.log(lat, lng)
                    setMapCenter({ lat, lng });
                    setPractitioners([
                        // Replace this with real data fetched from your backend
                        { id: 1, name: 'Dr. John Doe', location: { lat, lng } },
                        // ... more practitioners
                    ]);
                } else {
                    // Handle the case where geocoding returns no results
                    console.error('No results found for the provided location.');
                }
            } catch (error) {
                console.error('Search failed:', error);
            }
        };

        if (doctorsData.city) {
            geocodeLocation();
        }
    }, [google, doctorsData.specialty, doctorsData.city]);

    return (
        <>
            <div className='row'>
                <div className='col-md-4'>
                    <div className="practitioner-list">
                        {doctorsData.practitioners.map((practitioner) => (
                            <div className="practitioner-item" key={practitioner.id}>
                                <h4>{practitioner.firstName}</h4>
                                <img src={practitioner.imageUrl} alt={practitioner.firstName} />
                                <div className="practitioner-details">
                                    <p>{practitioner.specialty}</p>
                                    <p>{practitioner.location}</p>
                                </div>
                                <button className="view-profile-button">View Profile & Availability</button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='col-md-8'>
                    <Map google={google} zoom={14} center={mapCenter}>
                        {practitioners.map((practitioner) => (
                            <Marker
                                key={practitioner.id}
                                position={practitioner.location}
                            />
                        ))}
                    </Map>
                </div>
            </div>
        </>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDOWL_-VZyW4pqE3i_xB8Gk3KpWiD0dVjA'
})(MapMainContent);


