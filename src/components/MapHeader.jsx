import React from 'react';
import '../components/Header';

function MapHeader() {
    
    return (
        <header className="header">
                        <div className="logo">
                <a href="/">
                    <img src="https://medimovebucket.s3.eu-west-1.amazonaws.com/medimove-logo.png" alt="Logo" />
                </a>
            </div>
            <nav className="nav">
                <ul className="nav-list">
                <div className="search-box">
                    <select name="speciality" className="search-dropdown">
                        <option value="general-practice">General Practice</option>
                        <option value="general-practice">Cardiologist</option>
                        <option value="general-practice">General</option>
                        <option value="general-practice">Dentist</option>
                    </select>
                    <input type="text" className="search-input" placeholder="Enter street address, suburb or city" />
                    <a href = "" className="searchbutton-link">Search</a>
                </div>
                </ul>
            </nav>
            <div className="header-cta">
            </div>
        </header>
);
}

export default MapHeader;