import React, { useState } from 'react';
import '../styles/Slider.css';

interface SliderProps {
  min: number;
  max: number;
  step?: number;
  initialValue?: number;
  onChange?: (value: number) => void;
  label: string;
  id: string;
}

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step = 1,
  initialValue,
  onChange,
  label,
  id
}) => {
  const [value, setValue] = useState(initialValue || min);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="slider-container">
      <label htmlFor={id} className="slider-label">{label}</label>
      <div className="slider-control">
        <input
          type="range"
          id={id}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className="slider-input"
        />
        <div className="slider-value">{value}</div>
      </div>
    </div>
  );
};

export default Slider;