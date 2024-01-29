import React, { useEffect, useState } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

function MapMainContent({ google, specialty, location }) {
    const [practitioners, setPractitioners] = useState([]);
    const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });

    useEffect(() => {
        const geocodeLocation = async () => {
            // Replace 'YOUR_GOOGLE_MAPS_API_KEY' with the actual API key
            const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=AIzaSyDOWL_-VZyW4pqE3i_xB8Gk3KpWiD0dVjA`;

            try {
                const geocodeResponse = await fetch(geocodeUrl);
                const geocodeData = await geocodeResponse.json();

                if (!geocodeResponse.ok) {
                    throw new Error(`Geocoding error! status: ${geocodeResponse.status}`);
                }

                if (geocodeData.results && geocodeData.results.length > 0) {
                    const { lat, lng } = geocodeData.results[0].geometry.location;
                    setMapCenter({ lat, lng });

                    // Here, add your own logic to fetch practitioners using the lat, lng values
                    // For example, you might send these to your backend API that returns nearby practitioners
                    // const practitionersUrl = `YOUR_BACKEND_API/practitioners?lat=${lat}&lng=${lng}&specialty=${encodeURIComponent(specialty)}`;
                    // const practitionersResponse = await fetch(practitionersUrl);
                    // const practitionersData = await practitionersResponse.json();
                    // setPractitioners(practitionersData);

                    // For the purpose of this example, we're using dummy data:
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

        if (location) {
            geocodeLocation();
        }
    }, [google, specialty, location]);

    return (
        <div className="results-container">
            <div className="practitioner-list">
                {practitioners.map((practitioner) => (
                    <div className="practitioner-item" key={practitioner.id}>
                        {/* Display practitioner details */}
                        <h2>{practitioner.name}</h2>
                        {/* Add more details here */}
                    </div>
                ))}
            </div>
            <Map google={google} zoom={14} center={mapCenter}>
                {practitioners.map((practitioner) => (
                    <Marker
                        key={practitioner.id}
                        position={practitioner.location}
                    />
                ))}
            </Map>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDOWL_-VZyW4pqE3i_xB8Gk3KpWiD0dVjA' // Put your API key here
})(MapMainContent);


