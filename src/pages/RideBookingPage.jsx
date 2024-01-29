import React from 'react';
import UniversalHeader2 from '../components/UniversalHeader2';
import Footer from '../components/Footer';
import RideBookingMainContent from '../components/RideBookingMainContent';

function RideBookingPage() {
    return (
        <div>
            <UniversalHeader2 />
            <RideBookingMainContent />
            <Footer />
        </div>
    );
}
export default RideBookingPage;