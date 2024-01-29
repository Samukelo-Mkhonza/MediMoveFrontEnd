import React, { useState, useEffect } from 'react';
// Add CSS import if needed

function UniversalHeader() {
    const [profilePic, setProfilePic] = useState('default-profile-pic-url'); // Replace with default image URL

    useEffect(() => {
        // Fetch and update profile picture URL from your backend
        // setProfilePic(fetchedProfilePicUrl);
    }, []);

    const handleProfilePicUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            // Form data to send to the backend
            const formData = new FormData();
            formData.append('profilePic', file);

            try {
                const response = await fetch('/api/upload-profile-pic', { // Your backend endpoint
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    const data = await response.json();
                    setProfilePic(data.profilePicUrl); // Update state with new profile picture URL
                } else {
                    console.error('Failed to upload image');
                }
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };

    return (
        <header className="header">
                       <div className="logo">
                <a href="/">
                    <img src="https://medimovebucket.s3.eu-west-1.amazonaws.com/medimove-logo.png" alt="Logo" />
                </a>
            </div>
            {/* <nav className="nav">
                <ul className="nav-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav> */}
            <div className="profile-picture-container">
                <img src={profilePic} alt="Profile" className="profile-picture" />
                <input type="file" onChange={handleProfilePicUpload} accept="image/*" />
            </div>
        </header>
    );
}

export default UniversalHeader;

