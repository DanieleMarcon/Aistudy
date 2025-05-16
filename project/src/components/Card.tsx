import React from 'react';
import '../styles/Card.css';

interface CardProps {
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, icon, children, onClick, className = '' }) => {
  return (
    <div 
      className={`card ${onClick ? 'card-clickable' : ''} ${className}`} 
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {(title || icon) && (
        <div className="card-header">
          {icon && <div className="card-icon">{icon}</div>}
          {title && <h3 className="card-title">{title}</h3>}
        </div>
      )}
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;