import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const quoteRef = useRef(null);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
  ];

  useEffect(() => {
    // Logo fades in
    gsap.from(logoRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
    });

    // Links stagger in
    gsap.from(linksRef.current, {
      y: -20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power3.out',
      delay: 0.2,
    });

    // Quote button fades in last
    gsap.from(quoteRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
      delay: 0.4,
    });
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-black backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div ref={logoRef} className="text-2xl font-bold text-white">
          <NavLink to="/" className="flex items-center">
            <span className="text-[#1DCD9F]">One</span>
            <span className="text-white">For</span>
            <span className="text-[#1DCD9F]">Motion</span>
          </NavLink>
        </div>

        {/* Desktop Links + Quote */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <NavLink
              key={link.label}
              to={link.path}
              ref={(el) => (linksRef.current[i] = el)}
              className="text-white hover:text-[#E9F5BE] font-medium transition-colors duration-200"
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            ref={quoteRef}
            className="bg-[#1DCD9F] text-black px-5 py-2 rounded-full hover:bg-[#169976] transition-colors duration-200 font-medium"
          >
            Get Quote
          </NavLink>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen((o) => !o)}
          className="md:hidden text-[#1DCD9F] focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-[#111]/80`}
      >
        <ul className="flex flex-col items-center gap-4 py-6">
          {navLinks.map((link, i) => (
            <NavLink
              key={link.label}
              to={link.path}
              className="block text-white hover:text-[#E9F5BE] font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="block bg-[#1DCD9F] text-black px-8 py-2 rounded-full hover:bg-[#169976] transition-colors duration-200 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Get Quote
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
