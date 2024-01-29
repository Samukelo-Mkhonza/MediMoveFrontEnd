import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Header';
// import Header from './components/Header';
import HomePage from './pages/HomePage';
// import SignInPage from './pages/LoginPage'
// import MainContent from './components/HomeMainContent';
// import Footer from './components/Footer';
import './App.css';
import LoginPage from './pages/LoginPage';
import DriverDashboard from './pages/DriverDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import MapDashboard from './pages/MapDashboard';
import RideBookingPage from './pages/RideBookingPage';
import SignUpPage from './pages/SignUpPage';
// import SignUpFormMainContent from './components/SignUpFormMainContent';
// import SignUpPage from './pages/SignUpPage';
import SignUpFormPage from './pages/SignUpFormPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/driverdashboard" element={<DriverDashboard />} />
        <Route path="/doctordashboard" element={<DoctorDashboard />} />
        <Route path="/mapdashboard" element={<MapDashboard />} />
        <Route path="/ridebookingpage" element={<RideBookingPage />} />
        <Route path="/signuppage" element={<SignUpPage />} />
        <Route path="/signupformpage" element={<SignUpFormPage />} />
      </Routes>
    </Router>
  );
}

export default App;

