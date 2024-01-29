import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SidePanel = ({ isOpen, onClose }) => {

    const panelClass = isOpen ? 'side-panel open' : 'side-panel';
    const logoUrl = 'https://medimovebucket.s3.eu-west-1.amazonaws.com/medimove-logo.png';
    return (
        <div className={panelClass}>
            <div className="panel-header">
                <img src={logoUrl} alt="Logo" className="sidebar-logo" />
                <button onClick={onClose} className="close-button">☰</button>
            </div>
            <ul>
            {/* <Link to="/ridebookingpage" className="sidebar-option">Book Ride</Link> */}
            <li><a href="/ridebookingpage">Book Ride</a></li>
            <li><a href="#option3">Ride Requests</a></li>
                <li><a href="#option3">Schedule</a></li>
                <li><a href="#option1">Appointments</a></li>
                <li><a href="#option2">Calender</a></li>
                <li><a href="#option3">Patient Management</a></li>
                <li><a href="#option3"></a></li>
                {/* Add more options as needed */}
            </ul>
        </div>
    );
};

export default SidePanel;
