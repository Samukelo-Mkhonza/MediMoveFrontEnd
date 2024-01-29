import React from 'react';
// import './LoginMainContent';
import { useNavigate } from 'react-router-dom';

function SignUpMainContent() {
    const navigate = useNavigate();
    const handleDriverLoginClick = () => {
        navigate('/driverdashboard');

    };


    const handleDoctorLoginClick = () => {
        navigate('/signupformpage');

    };

    return (
        <div className="main-content">
            <div className="sign-in-page">
                <a href="" className="button-link" onClick={handleDriverLoginClick}>Sign Up as Driver</a>
                <a href="" className="button-link" onClick={handleDoctorLoginClick}>Sign Up as Practitioner</a>
            </div>
        </div>

    );
}

export default SignUpMainContent;