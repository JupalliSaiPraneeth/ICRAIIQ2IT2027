import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import CallForPapersPage from './pages/CallForPapersPage';
import SpeakersPage from './pages/SpeakersPage';
import CommitteePage from './pages/CommitteePage';
import RegistrationPage from './pages/RegistrationPage';
import VenuePage from './pages/VenuePage';
import ContactPage from './pages/ContactPage';
import AwardsPage from './pages/AwardsPage';
import AccommodationPage from './pages/AccommodationPage';
import GalleryPage from './pages/GalleryPage';
import PreviousProceedingsPage from './pages/PreviousProceedingsPage';
import BrochurePage from './pages/BrochurePage';

// Scroll to top automatically on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans selection:bg-[#d92d67] selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/call-for-papers" element={<CallForPapersPage />} />
            <Route path="/speakers" element={<SpeakersPage />} />
            <Route path="/committee" element={<CommitteePage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/venue" element={<VenuePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/awards" element={<AwardsPage />} />
            <Route path="/accommodation" element={<AccommodationPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/previous-proceedings" element={<PreviousProceedingsPage />} />
            <Route path="/souvenir" element={<Navigate to="/previous-proceedings" replace />} />
            <Route path="/brochure" element={<BrochurePage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
