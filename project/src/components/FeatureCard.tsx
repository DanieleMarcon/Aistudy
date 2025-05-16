import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import '../styles/FeatureCard.css';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, to }) => {
  return (
    <Link to={to} className="feature-card-link">
      <Card 
        title={title} 
        icon={icon}
        className="feature-card"
      >
        <p className="feature-description">{description}</p>
      </Card>
    </Link>
  );
};

export default FeatureCard;