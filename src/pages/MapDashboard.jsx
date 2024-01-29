import React from 'react';
import Footer from '../components/Footer';
import MapMainContent from '../components/MapMainContent';
// import UniversalHeader from '../components/UniversalHeader';
import MapHeader from '../components/MapHeader';

function MapDashboard() {
    return (
        <div>
            {/* <UniversalHeader /> */}
            <MapHeader />
            <MapMainContent/>
            <Footer />
        </div>
    );
}

export default MapDashboard;