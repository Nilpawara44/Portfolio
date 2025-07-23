import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md text-gray-200 shadow">
      <nav className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        {/* Logo / Name */}
        <Link to="/" onClick={closeMenu}>
          <h2 className="text-2xl font-bold">Nilesh Pawara</h2>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 font-semibold text-sm">
          <Link to="/" onClick={closeMenu}><li className="hover:text-amber-300">Home</li></Link>
          <Link to="/About" onClick={closeMenu}><li className="hover:text-amber-300">About</li></Link>
          <Link to="/Projects" onClick={closeMenu}><li className="hover:text-amber-300">Projects</li></Link>
          <Link to="/Contact" onClick={closeMenu}><li className="hover:text-amber-300">Contact</li></Link>
         
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 text-white py-6 px-4 space-y-4">
          <Link to="/" onClick={closeMenu} className="block hover:text-amber-300">Home</Link>
          <Link to="/About" onClick={closeMenu} className="block hover:text-amber-300">About</Link>
          <Link to="/Projects" onClick={closeMenu} className="block hover:text-amber-300">Projects</Link>
          <Link to="/Contact" onClick={closeMenu} className="block hover:text-amber-300">Contact</Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
