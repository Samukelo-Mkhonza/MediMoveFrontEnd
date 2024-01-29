import React from 'react';
import Footer from '../components/Footer';
import UniversalHeader from '../components/UniversalHeader';
// import DoctorDashboardMainContent from '../components/DoctorDashboardMainContent';
import DriverDashboardMainContent from '../components/DriverDashboardMainContent';
function DriverDashboard() {
    return (
        <div>
            <UniversalHeader />
            <DriverDashboardMainContent />
            {/* <HomeMainContent /> */}
            <Footer />
        </div>
    );
}

export default DriverDashboard;