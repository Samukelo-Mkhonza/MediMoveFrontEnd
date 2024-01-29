import React from 'react';
import Footer from '../components/Footer';
import UniversalHeader from '../components/UniversalHeader';
import DoctorDashboardMainContent from '../components/DoctorDashboardMainContent';
import DoctorDashboardCalendar from '../components/DoctorDashboardCalender';


function DoctorDashboard() {
    return (
        <div>
            <UniversalHeader />
            <DoctorDashboardMainContent />
            <DoctorDashboardCalendar />
            <Footer />
        </div>
    );
}

export default DoctorDashboard;