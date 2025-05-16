import React, { useState } from 'react';
import { Menu, X, BookOpen, HelpCircle, BookText, FileText, Network, Mic, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <BookOpen className="logo-icon" />
          <span>AIstudy</span>
        </Link>

        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/studiamo" 
              className={`nav-link ${isActive('/studiamo') ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              <BookOpen size={20} />
              <span>Studiamo</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/chiedi" 
              className={`nav-link ${isActive('/chiedi') ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              <HelpCircle size={20} />
              <span>Chiedi</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/vocabolario" 
              className={`nav-link ${isActive('/vocabolario') ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              <BookText size={20} />
              <span>Vocabolario</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/testo" 
              className={`nav-link ${isActive('/testo') ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              <FileText size={20} />
              <span>Testo</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/mappe" 
              className={`nav-link ${isActive('/mappe') ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              <Network size={20} />
              <span>Mappe</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/specchio" 
              className={`nav-link ${isActive('/specchio') ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              <Mic size={20} />
              <span>Specchio</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/accessibilita" 
              className={`nav-link ${isActive('/accessibilita') ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              <Settings size={20} />
              <span>Accessibilità</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;