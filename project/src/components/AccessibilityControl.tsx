import React from 'react';
import '../styles/AccessibilityControl.css';

interface AccessibilityControlProps {
  title: string;
  description: string;
  children: React.ReactNode;
  id: string;
}

const AccessibilityControl: React.FC<AccessibilityControlProps> = ({ 
  title, 
  description, 
  children,
  id
}) => {
  return (
    <div className="accessibility-control" id={id}>
      <div className="accessibility-control-header">
        <h3 className="accessibility-control-title">{title}</h3>
        <p className="accessibility-control-description">{description}</p>
      </div>
      <div className="accessibility-control-content">
        {children}
      </div>
    </div>
  );
};

export default AccessibilityControl;