
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogoIcon } from './icons/LogoIcon';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    closeMenu();
    // Use a small timeout to ensure the menu is closed before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const navLinks = [
    { name: "Biz haqimizda", id: "about" },
    { name: "Kurslar", id: "courses" },
    { name: "Bog'lanish", id: "contact" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-dark/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <Link to="/" onClick={closeMenu} className="flex items-center space-x-2">
                <LogoIcon className="h-10 w-10 text-primary" />
                <span className="text-2xl font-extrabold text-white tracking-wider">DATA SPACE</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <nav className="flex items-baseline space-x-4">
                {location.pathname === '/' ? (
                  navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      {link.name}
                    </button>
                  ))
                ) : (
                  <Link to="/" className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Bosh sahifa</Link>
                )}
              </nav>
              <Link to="/register" className="ml-8 bg-primary text-dark font-bold py-2 px-6 rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
                  Kursga yozilish
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-primary focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Card */}
      <div
        className={`md:hidden fixed top-20 left-4 right-4 z-40 bg-dark/95 backdrop-blur-sm shadow-xl rounded-2xl border border-gray-800 transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}
        id="mobile-menu"
      >
        <nav className="p-6 flex flex-col items-center space-y-4">
          {location.pathname === '/' ? (
            navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="w-full text-center text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-lg font-medium transition-colors"
              >
                {link.name}
              </button>
            ))
          ) : (
            <Link to="/" onClick={closeMenu} className="w-full text-center text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-lg font-medium transition-colors">Bosh sahifa</Link>
          )}
          <div className="pt-4 w-full">
            <Link
              to="/register"
              onClick={closeMenu}
              className="w-full inline-block text-center bg-primary text-dark font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
            >
              Kursga yozilish
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
