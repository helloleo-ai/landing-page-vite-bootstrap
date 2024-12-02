import { useState, useEffect } from 'react';
import NavLink from './NavLink';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isOpen ? 'menu-open' : ''}`}>
      <div className="nav-brand">
        <span className="logo-placeholder">LOGO</span>
      </div>
      
      <button className={`nav-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="hamburger"></span>
      </button>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <NavLink href="#hero" isActive={activePage === 'home'} onClick={closeMenu}>Home</NavLink>
        <NavLink href="#features" isActive={activePage === 'features'} onClick={closeMenu}>Features</NavLink>
        <NavLink href="#pricing" isActive={activePage === 'pricing'} onClick={closeMenu}>Pricing</NavLink>
        <NavLink href="#contact" isActive={activePage === 'contact'} onClick={closeMenu}>Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
