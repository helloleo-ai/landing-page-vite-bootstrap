import { useState } from 'react';
import NavLink from './NavLink';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="logo-placeholder">LOGO</span>
      </div>
      
      <button className="nav-toggle" onClick={toggleMenu}>
        <span className="hamburger"></span>
      </button>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <NavLink href="#" isActive={activePage === 'home'}>Home</NavLink>
        <NavLink href="#" isActive={activePage === 'features'}>Features</NavLink>
        <NavLink href="#" isActive={activePage === 'pricing'}>Pricing</NavLink>
        <NavLink href="#" isActive={activePage === 'contact'}>Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
