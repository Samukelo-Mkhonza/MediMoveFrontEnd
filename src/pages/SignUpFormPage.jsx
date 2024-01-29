import React from 'react';
import OtherPagesHeader from '../components/OtherPagesHeader';
import Footer from '../components/Footer';
// import LoginMainContent from '../components/LoginMainContent';
// import SignUpMainContent from '../components/SignUpMainContent';
import SignUpHeader from '../components/SignUpHeader';
import SignUpFormMainContent from '../components/SignUpFormMainContent';

function SignUpFormPage() {
    return (
        <div>
             <SignUpHeader />
            <SignUpFormMainContent/>
            <Footer/>
        </div>
    );
}
export default SignUpFormPage;