
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [showApp, setShowApp] = useState(false);
  const [isExitingLoader, setIsExitingLoader] = useState(false);

  useEffect(() => {
    // This timer is for demonstrating the loading screen.
    // In a real app, this would be tied to data fetching or asset loading.
    const timer = setTimeout(() => {
      setIsExitingLoader(true);
      // Wait for fade-out animation to finish before removing the loader
      // and showing the main app. Duration should match LoadingScreen's transition.
      setTimeout(() => setShowApp(true), 500); 
    }, 2000); // Show loader for at least 2 seconds.

    return () => clearTimeout(timer);
  }, []);

  if (!showApp) {
    return <LoadingScreen isExiting={isExitingLoader} />;
  }

  return (
    <HashRouter>
      <div className="bg-dark text-white font-sans">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
