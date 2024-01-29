import React from 'react';
import OtherPagesHeader from '../components/OtherPagesHeader';
import Footer from '../components/Footer';
import LoginMainContent from '../components/LoginMainContent';

function LoginPage() {
    return (
        <div>
            <OtherPagesHeader />
            <LoginMainContent/>
            <Footer />
        </div>
    );
}
export default LoginPage;