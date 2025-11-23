// components/common/Card.tsx
import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        margin: '10px',
        maxWidth: '300px',
        boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
      }}
    >
      <h2 style={{ marginBottom: '10px' }}>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;

