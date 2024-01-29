import React from 'react';
import '../components/Header';
import { useNavigate } from 'react-router-dom';


function OtherPagesHeader() 
{

    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/signuppage');
    };
    
    return (
        <header className="header">
                        <div className="logo">
                <a href="/">
                    <img src="https://medimovebucket.s3.eu-west-1.amazonaws.com/medimove-logo.png" alt="Logo" />
                </a>
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div className="header-cta">
                <a onClick={handleLoginClick} className="button-link">Sign Up</a>
            </div>
        </header>
);
}

export default OtherPagesHeader;
