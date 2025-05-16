import React, { useState } from 'react';
import '../styles/Toggle.css';

interface ToggleProps {
  initialValue?: boolean;
  onChange?: (value: boolean) => void;
  label: string;
  id: string;
}

const Toggle: React.FC<ToggleProps> = ({ 
  initialValue = false, 
  onChange,
  label,
  id
}) => {
  const [isChecked, setIsChecked] = useState(initialValue);

  const handleChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id={id}
        className="toggle-input"
        checked={isChecked}
        onChange={handleChange}
        aria-label={label}
      />
      <label htmlFor={id} className="toggle-label">
        <span className="toggle-button"></span>
        <span className="toggle-text">{label}</span>
      </label>
    </div>
  );
};

export default Toggle;