import React, { useState } from 'react';
// import SidePanel from './SidePanel';
import DriverSidePanel from './DriverSidePanel';

const DriverDashboardMainContent = () => {
  const [isPanelOpen, setPanelOpen] = useState(false);

  const togglePanel = () => setPanelOpen(!isPanelOpen);

  return (
    <div className="doctor-dashboard">
      <button onClick={togglePanel} className="hamburger-button">☰</button>
      <DriverSidePanel isOpen={isPanelOpen} onClose={togglePanel} />
    </div>
  );
};

export default DriverDashboardMainContent;