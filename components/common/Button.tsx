import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button = ({ size, shape, label, onClick }: ButtonProps) => {
  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full',
  };

  return (
    <button
      onClick={onClick}
      className={`${sizeClasses[size]} ${shapeClasses[shape]} bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-300 shadow-sm`}
    >
      {label}
    </button>
  );
};

export default Button;
