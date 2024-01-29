import React, { useState } from 'react';
import SidePanel from './SidePanel';

const DoctorDashboard = () => {
  const [isPanelOpen, setPanelOpen] = useState(false);

  const togglePanel = () => setPanelOpen(!isPanelOpen);

  return (
    <div className="doctor-dashboard">
      <button onClick={togglePanel} className="hamburger-button">☰</button>
      <SidePanel isOpen={isPanelOpen} onClose={togglePanel} />
    </div>
  );
};

export default DoctorDashboard;


