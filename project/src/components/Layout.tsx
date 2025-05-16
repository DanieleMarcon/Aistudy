import React from 'react';
import Navbar from './Navbar';
import '../styles/Layout.css';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  // Update document title
  React.useEffect(() => {
    if (title) {
      document.title = `${title} - AIstudy`;
    } else {
      document.title = 'AIstudy - Impara con l\'AI';
    }
  }, [title]);

  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        {title && <h1 className="page-title">{title}</h1>}
        {children}
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p>AIstudy © 2025 - Accessibilità e apprendimento per tutti</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;