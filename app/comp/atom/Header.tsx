// Header.tsx
import React from 'react';
import { Link } from '@remix-run/react';
import logoUrl from '../../../public/imgs/cumbialogo.png'; // Update the correct import path for your logo image
import './header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="bg-white shadow-lg h-24 hidden md:flex">
      <Link to="/" className="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8">
        <img src={logoUrl} className="h-20" alt="Logo" />
      </Link>
      <nav className="header-links contents font-semibold text-base lg:text-lg">
        <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
          <li className="p-3 xl:p-6 active">
            <Link to="/">
              <span>Home</span>
            </Link>
            <Link to="/">
              <span>Services</span>
            </Link>
            <Link to="/">
              <span>Ourwork</span>
            </Link>
            <Link to="/">
              <span>About Us</span>
            </Link>
          </li>
          {/* Repeat for other nav items */}
        </ul>
      </nav>
      <nav className="hidden xl:contents">
        <ul className="flex items-center mr-4 lg:mr-6 xl:mr-8">
          {/* Social links */}
        </ul>
      </nav>
      <div className="border flex items-center px-4 lg:px-6 xl:px-8">
        <Link to="/search" className="mr-4 lg:mr-6 xl:mr-8">
          {/* Search icon */}
        </Link>
        <Link to="/contact" className="bg-black hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">
          Contact Me
        </Link>
      </div>
    </header>
  );
};

export default Header;

