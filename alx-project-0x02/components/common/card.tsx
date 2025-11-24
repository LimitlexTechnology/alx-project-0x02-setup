import React from 'react';

export interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <article className="border rounded-lg p-4 shadow-sm max-w-xs bg-white">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{content}</p>
    </article>
  );
};

export default Card;

